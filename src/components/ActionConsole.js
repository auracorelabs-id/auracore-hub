/**
 * @file ActionConsole.js
 * @description 1-Column Innovation Console component for AuraCore Labs.
 * Centered, fluid, and comfortable layout for Prototype Access, Downloads, and Build-in-Public Telemetry.
 * @param {Array} productsList
 * @param {Object} labRoadmapData
 * @param {string} activeTab
 * @returns {string} HTML markup
 */

export function renderActionConsole(productsList, labRoadmapData, activeTab = 'request') {
  return `
    <div id="console-section" class="max-w-4xl mx-auto pt-8">
      
      <div class="organic-card p-6 sm:p-10 border border-slate-100 space-y-8">
        
        <!-- Header & Segmented Pill Controls -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-lg shadow-sm">
              ⚡
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-content-main">AuraCore Innovation Console</h3>
              <p class="text-xs text-slate-500">Portal interaktif permohonan akses prototipe, unduhan, dan telemetri lab</p>
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

        <!-- TAB CONTENT 1: Project Consultation & Service Inquiry Form -->
        <div id="tab-content-request" class="${activeTab === 'request' ? 'block' : 'hidden'} space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border border-slate-200/80">
            <div>
              <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                <span>Free Initial Architecture Review</span>
              </div>
              <h4 class="text-base font-bold text-content-main">Konsultasi Kebutuhan Software & Permintaan Penawaran</h4>
              <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                Ceritakan kebutuhan sistem digital atau tantangan teknis institusi Anda. Tim arsitek perangkat lunak kami akan menelaah dan memberikan estimasi transparan tanpa biaya komitmen awal.
              </p>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <a 
                href="https://wa.me/6282256657700" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors shadow-sm"
              >
                <span>💬 WhatsApp: +62 822-5665-7700</span>
              </a>
            </div>
          </div>

          <form id="prototype-request-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="req-name" class="block text-xs font-bold text-slate-600 mb-1.5">Nama Lengkap / Instansi / Perusahaan *</label>
                <input 
                  type="text" 
                  id="req-name" 
                  required 
                  placeholder="cth. Dr. Budi Santoso / RS Mitra Husada" 
                  class="pill-input"
                />
              </div>

              <div>
                <label for="req-email" class="block text-xs font-bold text-slate-600 mb-1.5">Email Kontak Resmi *</label>
                <input 
                  type="email" 
                  id="req-email" 
                  required 
                  placeholder="budi@mitrahusada.id" 
                  class="pill-input"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="req-product" class="block text-xs font-bold text-slate-600 mb-1.5">Fokus Solusi / Layanan yang Dibutuhkan</label>
                <select id="req-product" class="pill-input bg-slate-50 cursor-pointer">
                  <option value="Sistem Informasi RS & Rekam Medis (EMR SatuSehat)">Sistem Informasi RS & Rekam Medis (EMR SatuSehat)</option>
                  <option value="Integrasi Generative AI & Transkripsi Suara (Speech-to-Text)">Integrasi Generative AI & Transkripsi Suara (Speech-to-Text)</option>
                  <option value="Keamanan Siber, Zero-Knowledge Vault & Audit Kode">Keamanan Siber, Zero-Knowledge Vault & Audit Kode</option>
                  <option value="Software Desktop Windows x64 & Otomasi ADB/Hardware">Software Desktop Windows x64 & Otomasi ADB/Hardware</option>
                  <option value="Aplikasi Web / Mobile Enterprise Kustom">Aplikasi Web / Mobile Enterprise Kustom</option>
                  <option value="Uji Coba Prototipe Internal AuraCore">Uji Coba Prototipe Internal AuraCore</option>
                  <option value="Konsultasi Kemitraan & Solusi Lainnya">Konsultasi Kemitraan & Solusi Lainnya</option>
                </select>
              </div>

              <div>
                <label for="req-notes" class="block text-xs font-bold text-slate-600 mb-1.5">Uraian Kebutuhan Proyek / Target Waktu</label>
                <input 
                  type="text" 
                  id="req-notes" 
                  placeholder="cth. Modul antrean klinik, estimasi rilis Q3 2026" 
                  class="pill-input"
                />
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
              <span class="text-xs text-slate-400">
                Pesan akan terformat rapi dan langsung diteruskan ke WhatsApp resmi tim engineer kami.
              </span>
              <button 
                type="submit" 
                class="pill-btn-primary px-8 py-3 text-sm font-bold w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Kirim Konsultasi via WhatsApp</span>
                <span>🚀</span>
              </button>
            </div>
          </form>
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
                  🛡️
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
                class="pill-btn-primary bg-emerald-600 hover:bg-emerald-700 text-xs py-2 px-3 text-center shadow-none"
              >
                Unduh (.exe) →
              </a>
            </div>

            <!-- SimpanPassword Card -->
            <div class="p-4 rounded-2xl bg-sky-50/50 hover:bg-sky-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  🔑
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
                class="pill-btn-primary bg-sky-600 hover:bg-sky-700 text-xs py-2 px-3 text-center shadow-none"
              >
                Buka Web →
              </a>
            </div>

            <!-- BLineNote Card -->
            <div class="p-4 rounded-2xl bg-amber-50/50 hover:bg-amber-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  🎙️
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
                class="pill-btn-primary bg-amber-600 hover:bg-amber-700 text-xs py-2 px-3 text-center shadow-none"
              >
                Buka Web →
              </a>
            </div>

            <!-- AuraCore Health Card -->
            <div class="p-4 rounded-2xl bg-indigo-50/50 hover:bg-indigo-50 transition-all flex flex-col justify-between space-y-3">
              <div class="space-y-1.5">
                <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  🏥
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
                class="pill-btn-primary bg-indigo-600 hover:bg-indigo-700 text-xs py-2 px-3 text-center shadow-none"
              >
                Minta Akses →
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
