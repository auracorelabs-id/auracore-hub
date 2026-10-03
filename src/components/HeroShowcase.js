/**
 * @file HeroShowcase.js
 * @description Curated Homepage Showcase & Innovation Catalog (Clean Light Tech).
 * Displays a concise overview of all active prototypes and tools, inviting users to open
 * dedicated detail pages either by clicking a card or selecting via the Ecosystem menu.
 */

import { renderTechEcosystemGraphic } from './TechEcosystemGraphic.js';
import { 
  getProductIcon, 
  IconCheck, 
  IconArrowRight, 
  IconExternalLink, 
  IconDownload,
  IconWhatsApp
} from './icons.js';

export function renderHeroShowcase(productsList) {
  return `
    <div class="w-full space-y-16">
      
      <!-- 1-Column Grand Hero Banner (Centered & Breathing) -->
      <div class="text-center space-y-5 pt-4 sm:pt-8 max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 text-brand-blue text-xs font-bold shadow-soft-sm hover:scale-105 transition-transform cursor-default">
          <span class="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span>AURACORE LABS · SOFTWARE & AI ENGINEERING STUDIO</span>
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-content-main tracking-tight leading-[1.15]">
          Empowering Business with AI, <br/>
          <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            Crafting Secure Digital Systems.
          </span>
        </h1>

        <p class="text-content-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Kami merancang & membangun sistem enterprise terintegrasi, solusi kecerdasan buatan (AI), serta perangkat lunak berperforma tinggi dengan standar keamanan siber ketat untuk mentransformasi operasional bisnis Anda.
        </p>

        <!-- Quick Jump Buttons with Clear Business CTA -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="#services-section" class="pill-btn-primary px-7 py-3 text-sm flex items-center gap-2 shadow-soft-md">
            <span>Lihat Layanan & Solusi</span>
            <span>↓</span>
          </a>
          <a href="#prototype-catalog" class="pill-btn-secondary px-7 py-3 text-sm">
            Eksplorasi Bukti Karya (6 Solusi)
          </a>
          <a 
            href="https://wa.me/6282256657700" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all"
          >
            ${IconWhatsApp('w-4 h-4')}
            <span>Konsultasi Cepat (+62 822-5665-7700)</span>
          </a>
        </div>
      </div>

      <!-- 3D Isometric Animated Ecosystem Canvas (Orbiting Nodes) -->
      <div class="space-y-3 max-w-4xl mx-auto">
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
              <span>PORTFOLIO & PROOF OF CAPABILITY</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-content-main tracking-tight">
              Solusi Digital & Portofolio Rekayasa Aktif
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Bukti nyata kapabilitas teknis kami. Setiap aplikasi di bawah ini adalah produk fungsional hidup yang mendemonstrasikan keahlian kami dalam kecerdasan buatan, sistem kesehatan, kriptografi, dan utilitas desktop native.
            </p>
          </div>

          <div class="text-xs text-slate-400 font-semibold flex items-center gap-2 flex-shrink-0">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>${productsList.length} Solusi Fungsional Aktif</span>
          </div>
        </div>

        <!-- Curated Product Cards in Balanced 2-Column Responsive Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          ${productsList.map((product, index) => `
            <div 
              class="organic-card p-6 sm:p-7 flex flex-col justify-between border border-slate-100/90 hover:border-slate-200 hover:shadow-soft-xl transition-all duration-300 relative group h-full"
              id="card-${product.id}"
            >
              <!-- Card Top Row: Category, Name, and Status Badge -->
              <div class="space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl ${product.accentBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm border ${product.accentBorder}">
                      ${getProductIcon(product.id, `w-5 h-5 ${product.accentText}`)}
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
                  <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    ${product.description}
                  </p>
                </div>

                <!-- Core Highlights -->
                <div class="space-y-2 pt-1">
                  ${product.highlights.map(h => `
                    <div class="p-2.5 rounded-xl bg-slate-50/80 text-[11px] text-slate-600 flex items-start gap-2.5 border border-slate-100/80">
                      <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ${IconCheck('w-3 h-3')}
                      </span>
                      <span class="font-medium leading-snug">${h}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Card Bottom Action Bar (pinned to bottom via mt-auto) -->
              <div class="pt-4 mt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                
                <!-- Tech Stack Pills -->
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="text-[11px] text-slate-400 font-semibold mr-1">Stack:</span>
                  ${product.techStack.slice(0, 3).map(t => `
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">${t}</span>
                  `).join('')}
                  ${product.techStack.length > 3 ? `
                    <span class="text-[10px] font-mono text-slate-400">+${product.techStack.length - 3}</span>
                  ` : ''}
                </div>

                <!-- Two Action Buttons: Detail vs Direct Launch -->
                <div class="flex items-center gap-2">
                  <!-- Button 1: Dedicated Detail View Trigger -->
                  <button 
                    type="button"
                    data-action="open-product-detail"
                    data-product-id="${product.id}"
                    class="pill-btn-primary text-xs py-2 px-4 flex items-center gap-2 shadow-sm"
                  >
                    <span>Detail Spesifikasi</span>
                    ${IconArrowRight('w-3.5 h-3.5')}
                  </button>

                  <!-- Button 2: Direct Launch or Modal Request -->
                  ${product.actions.primary.isExternal ? `
                    <a 
                      href="${product.actions.primary.url}" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="pill-btn-secondary text-xs py-2 px-3.5 flex items-center gap-1.5 text-slate-600 font-bold"
                    >
                      <span>${product.actions.primary.type === 'download' ? 'Download' : 'Buka'}</span>
                      ${product.actions.primary.type === 'download' ? IconDownload('w-3.5 h-3.5') : IconExternalLink('w-3.5 h-3.5')}
                    </a>
                  ` : `
                    <button 
                      type="button" 
                      data-action="open-request-modal" 
                      data-preselect="${product.id}"
                      class="pill-btn-secondary text-xs py-2 px-3.5 text-slate-600 font-bold flex items-center gap-1.5"
                    >
                      <span>Demo</span>
                      ${IconArrowRight('w-3.5 h-3.5')}
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
