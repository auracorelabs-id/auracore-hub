/**
 * @file ActionConsole.js
 * @description 1-Column Innovation Console component for AuraCore Labs.
 * Centered, fluid, and comfortable layout for Prototype Access, Downloads, and Build-in-Public Telemetry.
 * @param {Array} productsList
 * @param {Object} labRoadmapData
 * @param {string} activeTab
 * @returns {string} HTML markup
 */

import {
  IconShieldCheck,
  IconKeyRound,
  IconAudioLines,
  IconActivity,
  IconCheck,
  IconArrowRight,
  IconDownload,
  IconExternalLink,
  IconTerminal
} from './icons.js';

export function renderActionConsole(productsList, labRoadmapData, activeTab = 'request') {
  return `
    <div id="console-section" class="max-w-6xl xl:max-w-7xl mx-auto pt-8 w-full">
      
      <div class="organic-card p-6 sm:p-10 border border-slate-100 space-y-8">
        
        <!-- Header & Segmented Controls -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shadow-sm border border-blue-100">
              ${IconTerminal('w-5 h-5 text-blue-600')}
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-content-main">AuraCore Engineering Console</h3>
              <p class="text-xs text-slate-500">Portal interaktif konsultasi proyek, unduhan binary resmi, dan telemetri lab</p>
            </div>
          </div>

          <!-- Segmented Tab Switcher (Fluid & Borderless) -->
          <div class="flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full shadow-inner">
            <button 
              type="button"
              data-console-tab="request"
              class="console-tab-btn py-2 px-4 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === 'request' 
                  ? 'bg-white text-brand-blue shadow-soft-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }"
            >
              Konsultasi Proyek & Jasa
            </button>
            
            <button 
              type="button"
              data-console-tab="quick-access"
              class="console-tab-btn py-2 px-4 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === 'quick-access' 
                  ? 'bg-white text-brand-blue shadow-soft-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }"
            >
              Quick Links
            </button>

            <button 
              type="button"
              data-console-tab="radar"
              class="console-tab-btn py-2 px-4 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === 'radar' 
                  ? 'bg-white text-brand-blue shadow-soft-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }"
            >
              Live Radar
            </button>
          </div>
        </div>

        <!-- TAB CONTENT 1: Project Consultation & Service Inquiry Form (Widescreen 2-Column Split) -->
        <div id="tab-content-request" class="${activeTab === 'request' ? 'block' : 'hidden'}">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Column: Trust Signals & Technical Credentials (5 Cols) -->
            <div class="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border border-slate-200 h-full">
              <div class="space-y-4">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-900 text-[11px] font-bold tracking-wide uppercase">
                  <span>Free Initial Architecture Review</span>
                </div>
                <h4 class="text-xl font-black text-content-main leading-tight">
                  Konsultasi Kebutuhan Software & Penawaran
                </h4>
                <p class="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Ceritakan kebutuhan sistem digital atau tantangan teknis institusi Anda. Arsitek software kami akan menelaah dan memberikan estimasi transparan tanpa komitmen awal.
                </p>

                <!-- Trust Points with Crisp Checkmarks -->
                <div class="space-y-3 pt-3 border-t border-slate-200/80">
                  <div class="flex items-start gap-3 text-xs text-slate-600">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ${IconCheck('w-3 h-3 text-emerald-600')}
                    </span>
                    <span class="leading-relaxed">Diskusi teknis langsung dengan Lead Software Engineer (tanpa perantara sales).</span>
                  </div>
                  <div class="flex items-start gap-3 text-xs text-slate-600">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ${IconCheck('w-3 h-3 text-emerald-600')}
                    </span>
                    <span class="leading-relaxed">Non-Disclosure Agreement (NDA) & jaminan kepemilikan 100% kode sumber untuk klien.</span>
                  </div>
                  <div class="flex items-start gap-3 text-xs text-slate-600">
                    <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ${IconCheck('w-3 h-3 text-emerald-600')}
                    </span>
                    <span class="leading-relaxed">Rencana arsitektur, timeline rilis, dan estimasi biaya transparan tanpa biaya tersembunyi.</span>
                  </div>
                </div>
              </div>

              <!-- Official Communication Channel Metadata -->
              <div class="pt-5 mt-6 border-t border-slate-200/80">
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Saluran Komunikasi Resmi:</span>
                <div class="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 text-xs shadow-soft-sm">
                  <div class="flex items-center gap-2.5 truncate">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"></span>
                    <span class="font-mono font-bold text-slate-800 text-[12px] truncate">+62 822-5665-7700</span>
                  </div>
                  <span class="text-[10px] text-slate-500 font-semibold px-2 py-0.5 rounded bg-slate-100 flex-shrink-0">
                    Respon &lt; 2 Jam
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column: Interactive Consultation Form (7 Cols) -->
            <div class="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between h-full">
              <form id="prototype-request-form" class="space-y-4 flex flex-col justify-between h-full">
                <div class="space-y-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="req-name" class="block text-xs font-bold text-slate-700 mb-1.5">Nama Lengkap / Instansi *</label>
                      <input 
                        type="text" 
                        id="req-name" 
                        required 
                        placeholder="cth. Budi Santoso / PT Mitra Digital" 
                        class="enterprise-input"
                      />
                    </div>

                    <div>
                      <label for="req-email" class="block text-xs font-bold text-slate-700 mb-1.5">Email Kontak Resmi *</label>
                      <input 
                        type="email" 
                        id="req-email" 
                        required 
                        placeholder="budi@perusahaan.co.id" 
                        class="enterprise-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="req-product" class="block text-xs font-bold text-slate-700 mb-1.5">Fokus Solusi / Layanan yang Dibutuhkan</label>
                    <select id="req-product" class="enterprise-input cursor-pointer bg-slate-50/70">
                      <option value="Sistem Informasi RS & Rekam Medis (EMR SatuSehat)">Sistem Informasi RS & Rekam Medis (EMR SatuSehat)</option>
                      <option value="IT Support & Security Center (Suite Perbaikan Sistem)">IT Support & Security Center (Suite Perbaikan Sistem)</option>
                      <option value="Integrasi Generative AI & Transkripsi Suara (Speech-to-Text)">Integrasi Generative AI & Transkripsi Suara (Speech-to-Text)</option>
                      <option value="Keamanan Siber, Zero-Knowledge Vault & Audit Kode">Keamanan Siber, Zero-Knowledge Vault & Audit Kode</option>
                      <option value="Software Desktop Windows x64 & Otomasi ADB/Hardware">Software Desktop Windows x64 & Otomasi ADB/Hardware</option>
                      <option value="Aplikasi Web / Mobile Enterprise Kustom">Aplikasi Web / Mobile Enterprise Kustom</option>
                      <option value="Uji Coba Prototipe Internal AuraCore">Uji Coba Prototipe Internal AuraCore</option>
                      <option value="Konsultasi Kemitraan & Solusi Lainnya">Konsultasi Kemitraan & Solusi Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label for="req-notes" class="block text-xs font-bold text-slate-700 mb-1.5">Uraian Kebutuhan Proyek & Target Rilis</label>
                    <input 
                      type="text" 
                      id="req-notes" 
                      placeholder="cth. Modul antrean klinik, target rilis Q3 2026" 
                      class="enterprise-input"
                    />
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <span class="text-[11px] text-slate-400 leading-relaxed">
                    Pesan akan otomatis terformat rapi dan diteruskan ke WhatsApp resmi AuraCore.
                  </span>
                  <button 
                    type="submit" 
                    class="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 flex-shrink-0"
                  >
                    <span>Kirim Permintaan Konsultasi</span>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.9 5.86L2.6 21.4a.8.8 0 001 1l3.54-1.3A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.6 13.6c-.2.56-1.16 1.08-1.6 1.12-.42.04-.96.06-1.54-.13-.36-.12-.82-.27-1.42-.53-2.5-1.08-4.14-3.6-4.26-3.77-.13-.17-1-1.33-1-2.54 0-1.2.63-1.8.85-2.04.23-.25.5-.31.67-.31.17 0 .34 0 .48.01.16.01.37-.06.58.44.22.52.74 1.8.8 1.93.07.13.11.29.02.46-.09.18-.13.29-.26.44-.13.15-.27.34-.39.46-.13.13-.26.27-.11.53.15.26.67 1.1 1.44 1.78.99.88 1.83 1.16 2.09 1.29.26.13.41.11.56-.06.16-.18.67-.78.85-1.05.18-.27.37-.22.62-.13.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.7-.13 1.26z"/></svg>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        <!-- TAB CONTENT 2: Quick Links & Instant Launch -->
        <div id="tab-content-quick-access" class="${activeTab === 'quick-access' ? 'block' : 'hidden'} space-y-4">
          <div class="max-w-xl">
            <h4 class="text-base font-bold text-content-main">Akses Cepat & Tautan Langsung</h4>
            <p class="text-xs text-slate-500 mt-1">Unduh executable mandiri atau buka web app secara langsung.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <!-- Sentinel Card -->
            <div class="p-4 rounded-2xl bg-emerald-50/50 hover:bg-emerald-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  ${IconShieldCheck('w-4 h-4 text-white')}
                </span>
                <h5 class="font-extrabold text-sm text-content-main">Sentinel</h5>
                <p class="text-xs text-slate-500">Android scanner executable mandiri Windows x64.</p>
                <span class="inline-block text-[10px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded-full shadow-sm">
                  v1.0.0 (~20.7 MB)
                </span>
              </div>
              <a 
                href="https://github.com/auracorelabs-id/auracore-sentinel/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                class="pill-btn-primary bg-emerald-600 hover:bg-emerald-700 text-xs py-2 px-3 text-center shadow-none flex items-center justify-center gap-1.5"
              >
                <span>Unduh (.exe)</span>
                ${IconDownload('w-3.5 h-3.5')}
              </a>
            </div>

            <!-- SimpanPassword Card -->
            <div class="p-4 rounded-2xl bg-sky-50/50 hover:bg-sky-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  ${IconKeyRound('w-4 h-4 text-white')}
                </span>
                <h5 class="font-extrabold text-sm text-content-main">SimpanPassword</h5>
                <p class="text-xs text-slate-500">Zero-knowledge client-side password vault.</p>
                <span class="inline-block text-[10px] font-semibold text-sky-700 bg-white px-2 py-0.5 rounded-full shadow-sm">
                  Live Web App
                </span>
              </div>
              <a 
                href="https://simpanpassword.my.id" 
                target="_blank" 
                rel="noopener noreferrer"
                class="pill-btn-primary bg-sky-600 hover:bg-sky-700 text-xs py-2 px-3 text-center shadow-none flex items-center justify-center gap-1.5"
              >
                <span>Buka Web</span>
                ${IconExternalLink('w-3.5 h-3.5')}
              </a>
            </div>

            <!-- BLineNote Card -->
            <div class="p-4 rounded-2xl bg-amber-50/50 hover:bg-amber-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  ${IconAudioLines('w-4 h-4 text-white')}
                </span>
                <h5 class="font-extrabold text-sm text-content-main">BLineNote</h5>
                <p class="text-xs text-slate-500">Catatan suara cerdas AI Gemini & E2EE 2FA.</p>
                <span class="inline-block text-[10px] font-semibold text-amber-700 bg-white px-2 py-0.5 rounded-full shadow-sm">
                  Live AI App
                </span>
              </div>
              <a 
                href="https://blinenote.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                class="pill-btn-primary bg-amber-600 hover:bg-amber-700 text-xs py-2 px-3 text-center shadow-none flex items-center justify-center gap-1.5"
              >
                <span>Buka Web</span>
                ${IconExternalLink('w-3.5 h-3.5')}
              </a>
            </div>

            <!-- AuraCore Health Card -->
            <div class="p-4 rounded-2xl bg-indigo-50/50 hover:bg-indigo-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  ${IconActivity('w-4 h-4 text-white')}
                </span>
                <h5 class="font-extrabold text-sm text-content-main">RS Health</h5>
                <p class="text-xs text-slate-500">Sistem manajemen RS cerdas & EMR terpadu.</p>
                <span class="inline-block text-[10px] font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded-full shadow-sm">
                  Private Alpha
                </span>
              </div>
              <button 
                type="button" 
                data-action="switch-to-request" 
                data-preselect="health"
                class="pill-btn-primary bg-indigo-600 hover:bg-indigo-700 text-xs py-2 px-3 text-center shadow-none flex items-center justify-center gap-1.5"
              >
                <span>Minta Akses</span>
                ${IconArrowRight('w-3.5 h-3.5')}
              </button>
            </div>
          </div>
        </div>

        <!-- TAB CONTENT 3: Live Radar & Build in Public -->
        <div id="tab-content-radar" class="${activeTab === 'radar' ? 'block' : 'hidden'} space-y-6">
          <div class="max-w-xl">
            <h4 class="text-base font-bold text-content-main">Telemetri & Roadmap Build in Public</h4>
            <p class="text-xs text-slate-500 mt-1">Metrik ekosistem dan siklus pengembangan yang sedang aktif.</p>
          </div>

          <!-- 4-Column Metric Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${labRoadmapData.telemetry.map(t => `
              <div class="p-4 rounded-2xl bg-slate-50/80">
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">${t.label}</div>
                <div class="text-base sm:text-lg font-extrabold text-content-main mt-1">${t.value}</div>
                <div class="text-xs text-brand-blue font-semibold mt-0.5">${t.trend}</div>
              </div>
            `).join('')}
          </div>

          <!-- Roadmap Timeline List -->
          <div class="pt-4 border-t border-slate-100 space-y-3">
            <div class="text-xs font-bold text-slate-400 uppercase tracking-wider">Milestone Roadmap:</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${labRoadmapData.timeline.map(item => `
                <div class="p-3.5 rounded-2xl bg-slate-50/70 flex items-start gap-3">
                  <span class="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${
                    item.status === 'completed' ? 'bg-emerald-500' :
                    item.status === 'in-progress' ? 'bg-amber-500 animate-pulse' : 'bg-slate-300'
                  }"></span>
                  <div>
                    <div class="text-xs font-bold text-content-main">${item.quarter} · ${item.title}</div>
                    <div class="text-xs text-slate-500 mt-0.5 leading-relaxed">${item.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}
