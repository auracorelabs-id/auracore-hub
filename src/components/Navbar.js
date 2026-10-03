/**
 * @file Navbar.js
 * @description Enterprise-grade floating top navigation bar inspired by GDMS Cloud.
 * Features a single-line sleek brand, wide multi-column mega-menu popover for all products,
 * allowing users to click any product to immediately open its detailed description page.
 * @param {Object} navigationData
 * @returns {string} HTML markup
 */

import { getProductIcon, IconWhatsApp } from './icons.js';

export function renderNavbar(navigationData) {
  const { brand } = navigationData;

  return `
    <header class="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
      <div class="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-18 flex items-center justify-between">
        
        <!-- Left: Sleek Single-Line Brand Logo -->
        <a href="#" id="nav-brand-logo" class="flex items-center gap-3 group focus:outline-none py-1">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 p-0.5 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
            <div class="w-full h-full bg-white rounded-[10px] p-1 flex items-center justify-center">
              <img 
                src="${brand.logoUrl}" 
                alt="AuraCore Logo" 
                class="w-full h-full object-contain"
                width="36"
                height="36"
              />
            </div>
          </div>
          <div class="flex items-center">
            <span class="text-base font-black tracking-tight text-content-main group-hover:text-brand-blue transition-colors">AURACORE</span>
            <span class="text-[11px] font-bold tracking-widest text-brand-blue uppercase ml-1.5 px-1.5 py-0.5 rounded bg-blue-50/80">LABS</span>
          </div>
        </a>

        <!-- Center: Desktop Navigation with Wide Multi-Column Mega-Menu -->
        <nav class="hidden md:flex items-center gap-7">
          
          <!-- Dropdown Mega Menu Trigger: Ecosystem & Products -->
          <div class="relative group py-5">
            <button 
              type="button" 
              class="flex items-center gap-1.5 text-sm font-semibold text-content-body hover:text-brand-blue transition-colors focus:outline-none group-hover:text-brand-blue"
              aria-expanded="false"
            >
              <span>Ecosystem & Products</span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Wide Multi-Column Mega Menu -->
            <div class="absolute left-1/2 -translate-x-1/2 top-full pt-1 w-[720px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
              <div class="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-slate-100 ring-1 ring-slate-900/5 space-y-4">
                
                <div class="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Pilih Aplikasi untuk Melihat Detail & Arsitektur</span>
                  <span class="text-emerald-600 font-semibold flex items-center gap-1.5 lowercase">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    6 solusi digital aktif
                  </span>
                </div>

                <!-- 2-Column Product Grid -->
                <div class="grid grid-cols-2 gap-3.5">
                  
                  <!-- Product 1: Sentinel -->
                  <a 
                    href="#product-sentinel" 
                    data-action="open-product-detail"
                    data-product-id="sentinel"
                    class="nav-product-link flex items-start gap-3.5 p-3 rounded-2xl hover:bg-emerald-50/60 transition-all duration-200 group/item border border-transparent hover:border-emerald-100"
                  >
                    <div class="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform">
                      ${getProductIcon('sentinel', 'w-4 h-4 text-emerald-700')}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-content-main group-hover/item:text-emerald-700 transition-colors">AuraCore Sentinel</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800">v1.0.0</span>
                      </div>
                      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        Pemindai malware Android & device manager mandiri untuk Windows x64.
                      </p>
                    </div>
                  </a>

                  <!-- Product 2: SimpanPassword -->
                  <a 
                    href="#product-simpanpassword" 
                    data-action="open-product-detail"
                    data-product-id="simpanpassword"
                    class="nav-product-link flex items-start gap-3.5 p-3 rounded-2xl hover:bg-sky-50/60 transition-all duration-200 group/item border border-transparent hover:border-sky-100"
                  >
                    <div class="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform">
                      ${getProductIcon('simpanpassword', 'w-4 h-4 text-sky-700')}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-content-main group-hover/item:text-sky-700 transition-colors">SimpanPassword</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100/80 text-sky-800">Live Web</span>
                      </div>
                      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        Vault kata sandi berbasis enkripsi zero-knowledge client-side AES-GCM.
                      </p>
                    </div>
                  </a>

                  <!-- Product 3: BLineNote -->
                  <a 
                    href="#product-blinenote" 
                    data-action="open-product-detail"
                    data-product-id="blinenote"
                    class="nav-product-link flex items-start gap-3.5 p-3 rounded-2xl hover:bg-amber-50/60 transition-all duration-200 group/item border border-transparent hover:border-amber-100"
                  >
                    <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform">
                      ${getProductIcon('blinenote', 'w-4 h-4 text-amber-700')}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-content-main group-hover/item:text-amber-700 transition-colors">BLineNote</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-800">Live AI</span>
                      </div>
                      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        Catatan suara cerdas bertenaga Gemini AI & proteksi End-to-End Encryption.
                      </p>
                    </div>
                  </a>

                  <!-- Product 4: AuraCore Health -->
                  <a 
                    href="#product-health" 
                    data-action="open-product-detail"
                    data-product-id="health"
                    class="nav-product-link flex items-start gap-3.5 p-3 rounded-2xl hover:bg-indigo-50/60 transition-all duration-200 group/item border border-transparent hover:border-indigo-100"
                  >
                    <div class="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform">
                      ${getProductIcon('health', 'w-4 h-4 text-indigo-700')}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-content-main group-hover/item:text-indigo-700 transition-colors">AuraCore Health</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100/80 text-indigo-800">Alpha</span>
                      </div>
                      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        Sistem antrean terpadu & rekam medis elektronik rumah sakit cerdas.
                      </p>
                    </div>
                  </a>

                  <!-- Product 5: AI Health Analytics -->
                  <a 
                    href="#product-ai-analytics" 
                    data-action="open-product-detail"
                    data-product-id="ai-analytics"
                    class="nav-product-link flex items-start gap-3.5 p-3 rounded-2xl hover:bg-purple-50/60 transition-all duration-200 group/item border border-transparent hover:border-purple-100"
                  >
                    <div class="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform">
                      ${getProductIcon('ai-analytics', 'w-4 h-4 text-purple-700')}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-content-main group-hover/item:text-purple-700 transition-colors">AI Health Analytics</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100/80 text-purple-800">R&D Lab</span>
                      </div>
                      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        Eksperimen model machine learning untuk inferensi prediktif data klinis.
                      </p>
                    </div>
                  </a>

                  <!-- Product 6: IT Support & Security Center -->
                  <a 
                    href="#product-itsupport" 
                    data-action="open-product-detail"
                    data-product-id="itsupport"
                    class="nav-product-link flex items-start gap-3.5 p-3 rounded-2xl hover:bg-teal-50/60 transition-all duration-200 group/item border border-transparent hover:border-teal-100"
                  >
                    <div class="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform">
                      ${getProductIcon('itsupport', 'w-4 h-4 text-teal-700')}
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-content-main group-hover/item:text-teal-700 transition-colors">IT Support Center</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100/80 text-teal-800">v3.2.0</span>
                      </div>
                      <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        86 modul perbaikan sistem, spooler printer, & air-gap karantina ransomware.
                      </p>
                    </div>
                  </a>

                </div>

                <!-- Footer Bar Inside Mega-Menu -->
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a 
                    href="#prototype-catalog" 
                    id="nav-view-catalog-link"
                    class="font-bold text-brand-blue hover:text-blue-700 transition-colors flex items-center gap-1.5"
                  >
                    <span>Jelajahi Semua Prototipe di Beranda</span>
                    <span>↓</span>
                  </a>
                  <span class="text-slate-400 font-medium">Klik produk untuk buka detail lengkap</span>
                </div>

              </div>
            </div>
          </div>

          <!-- Secondary Menu Links -->
          <a 
            href="#services-section" 
            id="nav-services-direct"
            class="text-sm font-semibold text-content-body hover:text-brand-blue py-2 transition-colors flex items-center gap-1.5"
          >
            <span>Layanan & Solusi</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 font-bold">New</span>
          </a>

          <a 
            href="#prototype-catalog" 
            id="nav-catalog-direct"
            class="text-sm font-semibold text-content-body hover:text-brand-blue py-2 transition-colors"
          >
            Portofolio Solusi
          </a>

          <a 
            href="#radar" 
            class="text-sm font-semibold text-content-body hover:text-brand-blue py-2 transition-colors"
          >
            Live Radar
          </a>
        </nav>

        <!-- Right Action Button -->
        <div class="flex items-center gap-2 sm:gap-3">
          
          <!-- Direct WhatsApp Contact Quick Link -->
          <a 
            href="https://wa.me/6282256657700" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all shadow-sm"
            title="Hubungi WhatsApp Resmi AuraCore Labs"
          >
            ${IconWhatsApp('w-3.5 h-3.5')}
            <span class="hidden sm:inline font-mono text-[11px]">+62 822-5665-7700</span>
            <span class="sm:hidden text-[11px]">WA</span>
          </a>

          <a 
            href="#console-section" 
            class="pill-btn-secondary text-xs py-2 px-4 sm:px-5 hover:border-brand-blue hover:text-brand-blue font-bold shadow-none"
          >
            Konsultasi Proyek
          </a>

          <!-- Mobile Menu Button -->
          <button 
            type="button" 
            id="mobile-menu-toggle"
            class="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle Navigation"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Mobile Dropdown Navigation -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl px-5 pt-3 pb-6 space-y-4">
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">Pilih Detail Produk</div>
          <a href="#product-sentinel" data-action="open-product-detail" data-product-id="sentinel" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">
            ${getProductIcon('sentinel', 'w-4 h-4 text-emerald-600')}
            <span>AuraCore Sentinel <span class="text-xs text-emerald-600 font-semibold">(v1.0.0)</span></span>
          </a>
          <a href="#product-simpanpassword" data-action="open-product-detail" data-product-id="simpanpassword" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">
            ${getProductIcon('simpanpassword', 'w-4 h-4 text-sky-600')}
            <span>SimpanPassword <span class="text-xs text-sky-600 font-semibold">(Live Web)</span></span>
          </a>
          <a href="#product-blinenote" data-action="open-product-detail" data-product-id="blinenote" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">
            ${getProductIcon('blinenote', 'w-4 h-4 text-amber-600')}
            <span>BLineNote <span class="text-xs text-amber-600 font-semibold">(Live AI)</span></span>
          </a>
          <a href="#product-health" data-action="open-product-detail" data-product-id="health" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">
            ${getProductIcon('health', 'w-4 h-4 text-indigo-600')}
            <span>AuraCore Health <span class="text-xs text-indigo-600 font-semibold">(Alpha)</span></span>
          </a>
          <a href="#product-ai-analytics" data-action="open-product-detail" data-product-id="ai-analytics" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">
            ${getProductIcon('ai-analytics', 'w-4 h-4 text-purple-600')}
            <span>AI Health Analytics <span class="text-xs text-purple-600 font-semibold">(R&D)</span></span>
          </a>
          <a href="#product-itsupport" data-action="open-product-detail" data-product-id="itsupport" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50">
            ${getProductIcon('itsupport', 'w-4 h-4 text-teal-600')}
            <span>IT Support Center <span class="text-xs text-teal-600 font-semibold">(v3.2.0)</span></span>
          </a>
        </div>
        <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <a 
            href="https://wa.me/6282256657700" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs"
          >
            ${IconWhatsApp('w-4 h-4')}
            <span>Hubungi via WhatsApp (+62 822-5665-7700)</span>
          </a>
          <a href="#console-section" class="pill-btn-primary text-xs py-2.5 text-center">Ajukan Akses & Kolaborasi</a>
        </div>
      </div>
    </header>
  `;
}
