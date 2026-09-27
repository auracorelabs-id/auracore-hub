/**
 * @file HeroShowcase.js
 * @description Curated Homepage Showcase & Innovation Catalog (Clean Light Tech).
 * Displays a concise overview of all active prototypes and tools, inviting users to open
 * dedicated detail pages either by clicking a card or selecting via the Ecosystem menu.
 */

import { renderTechEcosystemGraphic } from './TechEcosystemGraphic.js';

export function renderHeroShowcase(productsList) {
  return `
    <div class="max-w-4xl mx-auto space-y-14">
      
      <!-- 1-Column Grand Hero Banner (Centered & Breathing) -->
      <div class="text-center space-y-5 pt-4 sm:pt-8">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 text-brand-blue text-xs font-bold shadow-soft-sm hover:scale-105 transition-transform cursor-default">
          <span class="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span>AURACORE LABS INNOVATION HUB</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-content-main tracking-tight leading-[1.15]">
          Empowering Intelligence, <br/>
          <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
            Crafting Smart Prototypes.
          </span>
        </h1>

        <p class="text-content-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Wadah inovasi teknologi digital untuk pengembangan prototipe cerdas, solusi keamanan siber, dan manajemen kesehatan. Sinergi presisi kecerdasan buatan dan kreativitas manusia.
        </p>

        <!-- Quick Jump Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#prototype-catalog" class="pill-btn-primary px-7 py-3 text-sm">
            Jelajahi Prototipe ↓
          </a>
          <a href="#console-section" class="pill-btn-secondary px-7 py-3 text-sm">
            Ajukan Akses & Kolaborasi
          </a>
        </div>
      </div>

      <!-- 3D Isometric Animated Ecosystem Canvas (5 Orbiting Nodes) -->
      <div class="space-y-3">
        <div class="text-center">
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Peta Topologi Ekosistem Digital</span>
          <p class="text-xs text-slate-500">Klik node pada visual interaktif untuk langsung membuka spesifikasi produk</p>
        </div>
        ${renderTechEcosystemGraphic('sentinel')}
      </div>

      <!-- Overview Prototype Catalog Section -->
      <div id="prototype-catalog" class="pt-6 space-y-8">
        
        <!-- Section Title & Narrative -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200/80">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
              <span>PROTOTYPE SHOWCASE</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-content-main tracking-tight">
              Katalog Prototipe & Solusi Digital
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Ikhtisar ringkas portofolio inovasi aktif AuraCore Labs. Klik <strong>Lihat Detail Lengkap</strong> atau pilih melalui menu <strong>Ecosystem & Products</strong> di navigasi atas untuk membaca analisis arsitektur mendalam.
            </p>
          </div>

          <div class="text-xs text-slate-400 font-semibold flex items-center gap-2 flex-shrink-0">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>5 Prototipe Tersedia</span>
          </div>
        </div>

        <!-- 5 Concise Curated Product Cards -->
        <div class="space-y-6">
          ${productsList.map((product, index) => `
            <div 
              class="organic-card p-6 sm:p-8 space-y-5 border border-slate-100 hover:border-slate-200 hover:shadow-soft-xl transition-all duration-300 relative group"
              id="card-${product.id}"
            >
              <!-- Card Top Row: Category, Name, and Status Badge -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-2xl ${product.accentBg} flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    ${getProductEmoji(product.id)}
                  </div>
                  <div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <h3 class="text-lg sm:text-xl font-black text-content-main group-hover:text-brand-blue transition-colors">
                        ${product.name}
                      </h3>
                      <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${product.accentBg} ${product.accentText} border ${product.accentBorder}">
                        ${product.badge}
                      </span>
                    </div>
                    <p class="text-xs text-slate-400 font-medium">${product.subtitle} · <span class="text-slate-500 font-semibold">${product.category}</span></p>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <span class="text-[11px] text-slate-400 hidden sm:inline">Status:</span>
                  <span class="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    ${product.status}
                  </span>
                </div>
              </div>

              <!-- Tagline & Brief Summary -->
              <div class="space-y-1.5">
                <p class="text-sm sm:text-base font-semibold text-content-main leading-snug">
                  "${product.tagline}"
                </p>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                  ${product.description}
                </p>
              </div>

              <!-- 3 Core Highlights -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                ${product.highlights.map(h => `
                  <div class="p-3 rounded-xl bg-slate-50/80 text-[11px] text-slate-600 flex items-start gap-2 border border-slate-100">
                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">✓</span>
                    <span class="font-medium leading-snug">${h}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Card Bottom Action Bar -->
              <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <!-- Tech Stack Pills -->
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="text-[11px] text-slate-400 font-semibold mr-1">Stack:</span>
                  ${product.techStack.slice(0, 4).map(t => `
                    <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">${t}</span>
                  `).join('')}
                  ${product.techStack.length > 4 ? `
                    <span class="text-[10px] font-mono text-slate-400">+${product.techStack.length - 4}</span>
                  ` : ''}
                </div>

                <!-- Two Action Buttons: Detail vs Direct Launch -->
                <div class="flex items-center gap-2.5">
                  <!-- Button 1: Dedicated Detail View Trigger -->
                  <button 
                    type="button"
                    data-action="open-product-detail"
                    data-product-id="${product.id}"
                    class="pill-btn-primary text-xs py-2 px-5 flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Lihat Detail Lengkap</span>
                    <span>→</span>
                  </button>

                  <!-- Button 2: Direct Launch or Modal Request -->
                  ${product.actions.primary.isExternal ? `
                    <a 
                      href="${product.actions.primary.url}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="pill-btn-secondary text-xs py-2 px-4 flex items-center gap-1 text-slate-600"
                    >
                      <span class="hidden sm:inline">${product.actions.primary.type === 'download' ? 'Download' : 'Buka'}</span>
                      <span>↗</span>
                    </a>
                  ` : `
                    <button 
                      type="button" 
                      data-action="open-request-modal" 
                      data-preselect="${product.id}"
                      class="pill-btn-secondary text-xs py-2 px-4 text-slate-600"
                    >
                      <span>Demo</span>
                    </button>
                  `}
                </div>

              </div>

            </div>
          `).join('')}
        </div>

      </div>

    </div>
  `;
}

function getProductEmoji(id) {
  switch (id) {
    case 'sentinel': return '🛡️';
    case 'simpanpassword': return '🔑';
    case 'blinenote': return '🎙️';
    case 'health': return '🏥';
    case 'ai-analytics': return '✨';
    default: return '📦';
  }
}
