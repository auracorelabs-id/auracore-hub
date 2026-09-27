/**
 * @file main.js
 * @description Main application entry point for AuraCore Labs Website.
 * Follows AI-Friendly Architecture:
 * - Decoupled state management via `src/core/store.js`
 * - Event-driven routing via `src/core/router.js`
 * - Strict schema validation via `src/schemas/productSchema.js`
 * - Declarative data layer in `src/data/`
 */

import './style.css';
import { products } from './data/products.js';
import { navigation } from './data/navigation.js';
import { labRoadmap } from './data/labRoadmap.js';

import { store } from './core/store.js';
import { router } from './core/router.js';
import { showToast } from './utils/toast.js';
import { validateProductsList } from './schemas/productSchema.js';

import { renderNavbar } from './components/Navbar.js';
import { renderHeroShowcase } from './components/HeroShowcase.js';
import { renderProductDetail } from './components/ProductDetail.js';
import { getDetailTabMarkup } from './components/BLineNoteDetail.js';
import { renderActionConsole } from './components/ActionConsole.js';
import { renderFooter } from './components/Footer.js';

// Development runtime validation
if (import.meta.env?.DEV) {
  const validation = validateProductsList(products);
  if (!validation.valid) {
    console.error('⚠️ [SCHEMA WARNING] Products data schema validation failed:', validation.errors);
  } else {
    console.log('✅ [SCHEMA OK] All products adhere to AI-friendly schema specifications.');
  }
}

/**
 * Render the main application view inside #main-content
 */
function renderContent() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const state = store.getState();

  if (state.currentView === 'product-detail') {
    const product = products.find(p => p.id === state.activeDetailProductId) || products[0];
    mainContent.innerHTML = `
      <section id="product-detail-container" class="w-full">
        ${renderProductDetail(product, state.activeDetailSubTab)}
      </section>
    `;
    bindDetailEvents();
  } else {
    mainContent.innerHTML = `
      <section id="showcase-container">
        ${renderHeroShowcase(products)}
      </section>
      <section id="console-container">
        ${renderActionConsole(products, labRoadmap, state.activeConsoleTab)}
      </section>
    `;
    bindHomeEvents();
  }
}

/**
 * Initial Full DOM Mount
 */
function mountApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar(navigation)}
    <main id="main-content" class="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-16">
      <!-- Injected by renderContent() -->
    </main>
    ${renderFooter(navigation)}
  `;

  bindGlobalEvents();
  renderContent();
}

/**
 * Event bindings specific to Home view
 */
function bindHomeEvents() {
  // Console Tab switcher
  document.querySelectorAll('.console-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-console-tab');
      if (tab) {
        store.setState({ activeConsoleTab: tab });
        const container = document.getElementById('console-container');
        if (container) {
          container.innerHTML = renderActionConsole(products, labRoadmap, tab);
          bindHomeEvents();
        }
      }
    });
  });

  // Switch to request from quick-access
  document.querySelectorAll('[data-action="switch-to-request"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const preselect = btn.getAttribute('data-preselect');
      store.setState({ activeConsoleTab: 'request' });
      const container = document.getElementById('console-container');
      if (container) {
        container.innerHTML = renderActionConsole(products, labRoadmap, 'request');
        bindHomeEvents();
      }
      if (preselect) {
        const selectElem = document.getElementById('req-product');
        if (selectElem) selectElem.value = preselect;
      }
      document.getElementById('console-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Request prototype form (Connected to official WhatsApp +6282256657700)
  const form = document.getElementById('prototype-request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('req-name')?.value?.trim() || 'Mitra';
      const email = document.getElementById('req-email')?.value?.trim() || '-';
      const product = document.getElementById('req-product')?.value || 'Prototipe AuraCore';
      const notes = document.getElementById('req-notes')?.value?.trim() || 'Permohonan akses evaluasi & uji coba prototipe.';

      const waText = 
`Halo Tim Pengembang AuraCore Labs,

Saya mengajukan permohonan akses uji coba prototipe & kolaborasi:
• Nama / Organisasi: ${name}
• Email Kontak Resmi: ${email}
• Fokus Prototipe: ${product}
• Kebutuhan / Rencana Uji Coba: ${notes}

Mohon petunjuk akses dan prosedur pengujian berikutnya. Terima kasih!`;

      const waUrl = `https://wa.me/6282256657700?text=${encodeURIComponent(waText)}`;
      
      showToast(
        'Permohonan Diproses! 🚀', 
        `Terima kasih, ${name}. Pesan telah diformat dan diteruskan ke WhatsApp Resmi (+62 822-5665-7700).`, 
        'success'
      );

      // Open WhatsApp in new tab securely
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      form.reset();
    });
  }
}

/**
 * Event bindings specific to Product Detail view
 */
function bindDetailEvents() {
  // Back to home buttons
  const backBtn = document.getElementById('btn-back-to-home');
  const bottomBackBtn = document.getElementById('btn-bottom-back-home');
  [backBtn, bottomBackBtn].forEach(btn => {
    btn?.addEventListener('click', () => {
      router.navigate('home');
    });
  });

  // Sub-tabs in detail page
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-detail-tab');
      if (tabId) {
        store.setState({ activeDetailSubTab: tabId });
        const contentEl = document.getElementById('detail-tab-content');
        if (contentEl) contentEl.innerHTML = getDetailTabMarkup(tabId);

        document.querySelectorAll('.detail-tab-btn').forEach(b => {
          const isTarget = b.getAttribute('data-detail-tab') === tabId;
          b.className = isTarget 
            ? 'detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all bg-white text-content-main shadow-soft-md'
            : 'detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-slate-500 hover:text-content-main';
        });
      }
    });
  });

  // Copy live web app link
  const copyBtn = document.getElementById('btn-copy-live-url');
  copyBtn?.addEventListener('click', async () => {
    const url = copyBtn.getAttribute('data-url') || 'https://blinenote.vercel.app/';
    try {
      await navigator.clipboard.writeText(url);
      showToast('Link Disalin! 📋', `Alamat web app ${url} berhasil disalin ke papan klip.`, 'success');
    } catch {
      showToast('Alamat URL', url, 'info');
    }
  });

  // Desktop companion info
  const desktopBtn = document.getElementById('btn-desktop-download-info');
  desktopBtn?.addEventListener('click', () => {
    showToast('BLineNote Desktop Offline 💻', 'Aplikasi mandiri siap dijalankan tanpa internet untuk privasi lokal penuh.', 'info');
  });
}

/**
 * Bind global delegating events (Navbar, logo, universal triggers)
 */
function bindGlobalEvents() {
  // Brand Logo click -> Navigate Home
  document.getElementById('nav-brand-logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    router.navigate('home');
  });

  // Direct catalog links
  const viewCatalogLink = document.getElementById('nav-view-catalog-link');
  const directCatalogLink = document.getElementById('nav-catalog-direct');
  [viewCatalogLink, directCatalogLink].forEach(link => {
    link?.addEventListener('click', (e) => {
      e.preventDefault();
      const current = store.getState().currentView;
      if (current !== 'home') {
        router.navigate('home', null, '#prototype-catalog');
      } else {
        document.getElementById('prototype-catalog')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Universal: Open product detail buttons / links / 3D graphic nodes
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action="open-product-detail"], .interactive-node[data-product-id]');
    if (target) {
      e.preventDefault();
      const productId = target.getAttribute('data-product-id');
      if (productId) {
        router.navigate('product-detail', productId);

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          store.setState({ mobileMenuOpen: false });
        }
      }
    }
  });

  // Universal: Request Access buttons
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action="open-request-modal"]');
    if (target) {
      e.preventDefault();
      const preselect = target.getAttribute('data-preselect') || 'health';
      if (store.getState().currentView !== 'home') {
        router.navigate('home', null, '#console-section');
      }
      store.setState({ activeConsoleTab: 'request' });
      
      setTimeout(() => {
        const selectElem = document.getElementById('req-product');
        if (selectElem) {
          selectElem.value = preselect;
          selectElem.classList.add('ring-2', 'ring-brand-blue');
          setTimeout(() => selectElem.classList.remove('ring-2', 'ring-brand-blue'), 1000);
        }
        document.getElementById('console-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !store.getState().mobileMenuOpen;
      store.setState({ mobileMenuOpen: isOpen });
      mobileMenu.classList.toggle('hidden', !isOpen);
    });
  }

  // Anchor links for radar
  document.querySelectorAll('a[href="#radar"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (store.getState().currentView !== 'home') {
        router.navigate('home', null, '#console-section');
      }
      store.setState({ activeConsoleTab: 'radar' });
      document.getElementById('console-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Router Event Subscription
router.onRouteChange((route) => {
  store.setState({
    currentView: route.view,
    activeDetailProductId: route.productId || store.getState().activeDetailProductId,
    activeDetailSubTab: 'ai-audio'
  });
  renderContent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sync initial route with store
const initialRoute = router.getCurrentRoute();
store.setState({
  currentView: initialRoute.view,
  activeDetailProductId: initialRoute.productId || 'blinenote'
});

// Bootstrapping
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
