/**
 * @file BLineNoteDetail.js
 * @description Hardened & Security-Audited Technical Detail View for BLineNote.
 * Built adhering to AuraCore's Clean Light Tech aesthetic (Single-Column, organic cards, soft ambient glows).
 * AUDITED FOR APPSEC & REPUTATIONAL INTEGRITY:
 * - No internal cryptographic salt / key-derivation formulas exposed.
 * - No internal database schema leaks or sensitive recovery patterns disclosed.
 * - No external GitHub repository links published or displayed.
 */

export function renderBLineNoteDetail(activeDetailTab = 'ai-audio') {
  return `
    <div class="max-w-4xl mx-auto space-y-10 animate-fade-in pb-12">
      
      <!-- Top Navigation & Breadcrumbs -->
      <div class="flex items-center justify-between gap-4 pt-2">
        <button 
          type="button" 
          id="btn-back-to-home"
          class="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-blue py-2 px-3.5 rounded-full bg-white hover:bg-blue-50 border border-slate-200/80 shadow-soft-sm transition-all"
        >
          <span>←</span>
          <span>Kembali ke Beranda</span>
        </button>

        <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <span class="font-medium text-slate-500">AuraCore Labs</span>
          <span>/</span>
          <span class="font-medium text-slate-500">AI & Security Ecosystem</span>
          <span>/</span>
          <span class="font-bold text-brand-blue">BLineNote Detail</span>
        </div>
      </div>

      <!-- Hero Header Section -->
      <div class="text-center space-y-4 pt-2">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold shadow-soft-sm border border-amber-200/60">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>SPESIFIKASI & ARSITEKTUR PRODUK</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-black text-content-main tracking-tight leading-tight">
          BLineNote
          <span class="block text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent mt-1">
            AI Voice Workspace & Client-Side Privacy Protection
          </span>
        </h1>

        <p class="text-content-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Ruang kerja catatan cerdas yang memadukan transkripsi audio real-time berbasis Web Speech AI dengan standar perlindungan data sisi klien (Client-Side Encryption) dan verifikasi dua langkah (2FA).
        </p>

        <!-- Quick Launch CTA Pills -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-3">
          <a 
            href="https://blinenote.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="pill-btn-primary px-7 py-3 text-xs flex items-center gap-2"
          >
            <span>Buka Web App Live</span>
            <span>↗</span>
          </a>

          <button 
            type="button" 
            id="btn-copy-live-url"
            data-url="https://blinenote.vercel.app/"
            class="pill-btn-secondary px-6 py-3 text-xs flex items-center gap-2"
          >
            <span>📋 Salin Link Web App</span>
          </button>

          <button 
            type="button" 
            id="btn-desktop-download-info"
            class="pill-btn-secondary px-6 py-3 text-xs flex items-center gap-2 text-slate-700"
          >
            <span>💻 Info Edisi Desktop Offline</span>
          </button>
        </div>
      </div>

      <!-- Live App Screenshot Frame (Mac-Style Clean Mockup) -->
      <div class="relative group">
        <div class="absolute -inset-3 bg-gradient-to-r from-amber-500/15 via-sky-500/15 to-indigo-500/15 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
        
        <div class="relative bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden">
          <!-- Window Chrome Bar -->
          <div class="bg-slate-100/90 px-4 py-3 border-b border-slate-200/80 flex items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
            </div>

            <div class="flex-1 max-w-md mx-auto bg-white px-3.5 py-1.5 rounded-full border border-slate-200 text-xs text-slate-600 flex items-center justify-between shadow-soft-sm">
              <div class="flex items-center gap-2 truncate">
                <span class="text-emerald-600 font-bold text-xs">🔒</span>
                <span class="font-mono text-[11px] text-slate-700">https://blinenote.vercel.app/</span>
              </div>
              <span class="text-[10px] text-emerald-600 font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60">
                AES-GCM-256 Active
              </span>
            </div>

            <span class="text-xs font-bold text-slate-400 font-mono">v1.0.0 Live</span>
          </div>

          <!-- Screenshot Media -->
          <div class="relative bg-slate-50 overflow-hidden">
            <img 
              src="/screenshots/blinenote.png" 
              alt="Antarmuka Asli BLineNote" 
              class="w-full h-auto object-cover"
              loading="lazy"
              width="1280"
              height="720"
            />
          </div>
        </div>
      </div>

      <!-- Feature Deep-Dive Segmented Tabs -->
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/80 backdrop-blur-md rounded-2xl max-w-3xl mx-auto shadow-inner">
          <button 
            type="button" 
            data-detail-tab="ai-audio"
            class="detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeDetailTab === 'ai-audio' ? 'bg-white text-content-main shadow-soft-md' : 'text-slate-500 hover:text-content-main'
            }"
          >
            🎙️ Audio & Voice
          </button>
          <button 
            type="button" 
            data-detail-tab="e2ee-security"
            class="detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeDetailTab === 'e2ee-security' ? 'bg-white text-content-main shadow-soft-md' : 'text-slate-500 hover:text-content-main'
            }"
          >
            🔒 Enkripsi Data
          </button>
          <button 
            type="button" 
            data-detail-tab="totp-auth"
            class="detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeDetailTab === 'totp-auth' ? 'bg-white text-content-main shadow-soft-md' : 'text-slate-500 hover:text-content-main'
            }"
          >
            🛡️ 2FA TOTP
          </button>
          <button 
            type="button" 
            data-detail-tab="smart-editor"
            class="detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeDetailTab === 'smart-editor' ? 'bg-white text-content-main shadow-soft-md' : 'text-slate-500 hover:text-content-main'
            }"
          >
            ✍️ Checkbox & Editor
          </button>
          <button 
            type="button" 
            data-detail-tab="desktop-companion"
            class="detail-tab-btn flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
              activeDetailTab === 'desktop-companion' ? 'bg-white text-content-main shadow-soft-md' : 'text-slate-500 hover:text-content-main'
            }"
          >
            💻 Desktop Offline
          </button>
        </div>

        <!-- Detail Tab Content Panels -->
        <div id="detail-tab-content" class="organic-card p-6 sm:p-8 border border-slate-100 space-y-6">
          ${getDetailTabMarkup(activeDetailTab)}
        </div>
      </div>

      <!-- Architectural Data Flow Section -->
      <div class="organic-card p-6 sm:p-8 border border-slate-100 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 class="text-lg font-black text-content-main">Diagram Alur Kerja & Proteksi Data</h3>
            <p class="text-xs text-slate-400 mt-0.5">Mekanisme pemrosesan suara, sanitasi input, dan perlindungan privasi pengguna.</p>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Privacy By Design
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
          <!-- Step 1 -->
          <div class="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 relative space-y-2">
            <div class="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h4 class="text-xs font-extrabold text-content-main">Pengambilan Suara Lokal</h4>
            <p class="text-[11px] text-slate-500 leading-relaxed">
              Mikrofon merekam audio langsung di browser via Web Speech API untuk menghasilkan transkripsi teks secara real-time.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 relative space-y-2">
            <div class="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h4 class="text-xs font-extrabold text-content-main">Sanitasi & Enkripsi Klien</h4>
            <p class="text-[11px] text-slate-500 leading-relaxed">
              Konten teks dibersihkan dari potensi XSS dengan DOMPurify, lalu dienkripsi menggunakan sandi AES-GCM 256-bit di memori lokal.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 relative space-y-2">
            <div class="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h4 class="text-xs font-extrabold text-content-main">Verifikasi 2FA Gatekeeper</h4>
            <p class="text-[11px] text-slate-500 leading-relaxed">
              Akses akun diverifikasi menggunakan token TOTP standar (Google Authenticator/Authy) untuk mengamankan sesi pengguna.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 relative space-y-2">
            <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h4 class="text-xs font-extrabold text-content-main">Penyimpanan Terproteksi</h4>
            <p class="text-[11px] text-slate-500 leading-relaxed">
              Data disimpan dalam bentuk terenkripsi pada cloud database atau disimpan 100% lokal pada workstation offline.
            </p>
          </div>
        </div>
      </div>

      <!-- Technical Specifications Matrix -->
      <div class="organic-card p-6 sm:p-8 border border-slate-100 space-y-5">
        <h3 class="text-lg font-black text-content-main">Matriks Spesifikasi Teknis</h3>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                <th class="py-3 px-3">Komponen</th>
                <th class="py-3 px-3">Teknologi / Standar</th>
                <th class="py-3 px-3">Karakteristik & Manfaat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600 font-medium">
              <tr>
                <td class="py-3 px-3 font-bold text-content-main">Sistem Kriptografi</td>
                <td class="py-3 px-3 font-mono text-[11px] text-brand-blue">AES-GCM-256 (Web Crypto API)</td>
                <td class="py-3 px-3">Enkripsi simetris terautentikasi (Authenticated Encryption) di sisi peramban.</td>
              </tr>
              <tr>
                <td class="py-3 px-3 font-bold text-content-main">Autentikasi Dua Faktor</td>
                <td class="py-3 px-3 font-mono text-[11px] text-brand-blue">TOTP (RFC 6238 Standard)</td>
                <td class="py-3 px-3">Kompatibel penuh dengan Google Authenticator, Authy, dan aplikasi TOTP terpercaya.</td>
              </tr>
              <tr>
                <td class="py-3 px-3 font-bold text-content-main">Speech Engine</td>
                <td class="py-3 px-3 font-mono text-[11px] text-brand-blue">Web Speech API (id-ID) + Audio API</td>
                <td class="py-3 px-3">Transkripsi langsung bahasa Indonesia tanpa overhead latensi server eksternal.</td>
              </tr>
              <tr>
                <td class="py-3 px-3 font-bold text-content-main">Sanitasi Konten</td>
                <td class="py-3 px-3 font-mono text-[11px] text-brand-blue">DOMPurify HTML Engine</td>
                <td class="py-3 px-3">Mencegah serangan XSS (Cross-Site Scripting) pada catatan berformat rich-text.</td>
              </tr>
              <tr>
                <td class="py-3 px-3 font-bold text-content-main">Penyebaran Web</td>
                <td class="py-3 px-3 font-mono text-[11px] text-brand-blue">Edge Cloud Deployment</td>
                <td class="py-3 px-3">Penyebaran CDN global dengan koneksi HTTPS terenkripsi TLS 1.3.</td>
              </tr>
              <tr>
                <td class="py-3 px-3 font-bold text-content-main">Dukungan Offline</td>
                <td class="py-3 px-3 font-mono text-[11px] text-brand-blue">Standalone Portable Workstation</td>
                <td class="py-3 px-3">Solusi penyimpanan lokal untuk kebutuhan privasi total di lingkungan intranet terisolasi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Bottom Call to Action -->
      <div class="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 text-white space-y-4 shadow-xl">
        <h3 class="text-2xl font-black">Coba BLineNote Secara Langsung</h3>
        <p class="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
          Nikmati kemudahan mencatat ide lewat suara dan perlindungan privasi langsung di peramban Anda.
        </p>
        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a 
            href="https://blinenote.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="px-8 py-3.5 rounded-full bg-white text-brand-blue font-bold text-xs shadow-lg hover:bg-slate-50 hover:scale-105 transition-all"
          >
            Buka BLineNote Web ↗
          </a>
          <button 
            type="button" 
            id="btn-bottom-back-home"
            class="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>

    </div>
  `;
}

/**
 * Returns dynamic markup for each detail tab with sanitized, security-safe language
 * @param {'ai-audio' | 'e2ee-security' | 'totp-auth' | 'smart-editor' | 'desktop-companion'} tab
 */
export function getDetailTabMarkup(tab) {
  switch (tab) {
    case 'ai-audio':
      return `
        <div class="space-y-5 animate-fade-in">
          <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div class="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg font-bold">
              🎙️
            </div>
            <div>
              <h4 class="text-base font-extrabold text-content-main">Arsitektur Voice Recording & Speech-to-Text</h4>
              <p class="text-xs text-slate-400">Pengolahan audio streaming dan transkripsi bahasa alami</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block">Transkripsi Real-Time</span>
              <p class="text-xs text-slate-600 leading-relaxed">
                Menggunakan Web Speech API dengan konfigurasi bahasa Indonesia (<code class="text-amber-800 font-mono">id-ID</code>). Hasil penyuaraan pengguna langsung dikonversikan menjadi token teks secara instan saat berbicara.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block">Pause / Resume Buffer</span>
              <p class="text-xs text-slate-600 leading-relaxed">
                Dilengkapi state buffer otomatis yang menahan teks saat pengguna menjeda rekaman, mencegah hilangnya kata-kata terakhir sebelum dilanjutkan kembali.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block">Sintesis Suara (TTS)</span>
              <p class="text-xs text-slate-600 leading-relaxed">
                Dukungan pembacaan catatan otomatis (Text-to-Speech) menggunakan browser speech synthesis, memungkinkan pengguna mendengarkan kembali ide yang telah dicatat tanpa perlu membaca layar.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block">Indikator Visual Transparansi</span>
              <p class="text-xs text-slate-600 leading-relaxed">
                Visualizer status rekaman berdenyut (pulse) memberikan konfirmasi visual bahwa mikrofon sedang aktif, memastikan kontrol penuh privasi ada di tangan pengguna.
              </p>
            </div>
          </div>
        </div>
      `;

    case 'e2ee-security':
      return `
        <div class="space-y-5 animate-fade-in">
          <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div class="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-lg font-bold">
              🔒
            </div>
            <div>
              <h4 class="text-base font-extrabold text-content-main">Proteksi Data Klien & Kriptografi Modern</h4>
              <p class="text-xs text-slate-400">Penerapan standar enkripsi simetris terautentikasi di sisi peramban</p>
            </div>
          </div>

          <div class="space-y-4 text-xs text-slate-600 leading-relaxed">
            <p>
              BLineNote menerapkan pendekatan <strong class="text-content-main">Client-Side Data Protection</strong> yang mengisolasi proses pembacaan dan penyimpanan teks langsung di lingkungan eksekusi peramban pengguna.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                <span class="font-bold text-sky-800 block text-xs">Sandi AES-GCM 256-bit</span>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Catatan diamankan menggunakan Galois/Counter Mode (GCM) yang menyediakan enkripsi terautentikasi (Authenticated Encryption) serta Initialization Vector (IV) unik pada setiap sesi penyimpanan.
                </p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                <span class="font-bold text-sky-800 block text-xs">Pemanfaatan Web Crypto API</span>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Operasi kriptografis dijalankan secara native oleh engine peramban tanpa bergantung pada library JavaScript pihak ketiga yang berpotensi memiliki dependensi rentan.
                </p>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div class="text-xs font-bold text-content-main">🛡️ Kebijakan Perlindungan Transmisi:</div>
              <p class="text-[11px] text-slate-500 leading-relaxed">
                Seluruh komunikasi jaringan dilindungi melalui protokol HTTPS/TLS modern. Data yang dikirimkan ke cloud storage telah melalui transformasi sandi kriptografis sehingga mencegah intersepsi data pada lapisan transmisi publik.
              </p>
            </div>
          </div>
        </div>
      `;

    case 'totp-auth':
      return `
        <div class="space-y-5 animate-fade-in">
          <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div class="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-lg font-bold">
              🛡️
            </div>
            <div>
              <h4 class="text-base font-extrabold text-content-main">Two-Factor Authentication (2FA) Terstandarisasi</h4>
              <p class="text-xs text-slate-400">Verifikasi dua langkah berbasis standar industri terbuka RFC 6238</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <div class="text-indigo-600 font-bold">1. Wizard Setup QR</div>
              <p class="text-slate-500 leading-relaxed">
                Mendukung kode QR terstandarisasi yang dapat dipindai oleh Google Authenticator, Authy, maupun 1Password, disertai kunci manual teks.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <div class="text-indigo-600 font-bold">2. Countdown Otomatis</div>
              <p class="text-slate-500 leading-relaxed">
                Antarmuka verifikasi 6-digit dengan bilah kemajuan waktu nyata yang menunjukkan masa berlaku token TOTP sebelum regenerasi.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2">
              <div class="text-indigo-600 font-bold">3. Cadangan Darurat</div>
              <p class="text-slate-500 leading-relaxed">
                Menyediakan rangkaian kode pemulihan darurat sekali pakai jika pengguna kehilangan akses ke perangkat autentikator fisik.
              </p>
            </div>
          </div>
        </div>
      `;

    case 'smart-editor':
      return `
        <div class="space-y-5 animate-fade-in">
          <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-bold">
              ✍️
            </div>
            <div>
              <h4 class="text-base font-extrabold text-content-main">Smart Rich Editor & Interactive Checklists</h4>
              <p class="text-xs text-slate-400">Engine to-do list interaktif dan deteksi URL otomatis yang ergonomis</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-50 space-y-2 border border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-base">☑️</span>
                <span class="font-extrabold text-content-main">Interactive Checklists</span>
              </div>
              <p class="text-slate-500 leading-relaxed">
                Pembuatan to-do list terpadu dengan shortcut keyboard: tombol <strong class="text-slate-700">Enter</strong> langsung membuat baris checklist baru, dan <strong class="text-slate-700">Backspace</strong> menghapus baris kosong. Item selesai diberi animasi strike-through halus.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2 border border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-base">🪄</span>
                <span class="font-extrabold text-content-main">Auto URL Detection</span>
              </div>
              <p class="text-slate-500 leading-relaxed">
                Engine regex pintar yang mendeteksi pola tautan web secara otomatis dengan mekanisme debounce 1.5 detik agar performa pengetikan tetap responsif tanpa lag.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2 border border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-base">💾</span>
                <span class="font-extrabold text-content-main">Pencadangan Berkas Lokal</span>
              </div>
              <p class="text-slate-500 leading-relaxed">
                Menyimpan progres penulisan otomatis secara periodik. Pengguna dapat mengekspor atau memulihkan berkas catatan secara mandiri untuk menghindari keterikatan platform.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 space-y-2 border border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-base">🛡️</span>
                <span class="font-extrabold text-content-main">Sanitasi Konten dengan DOMPurify</span>
              </div>
              <p class="text-slate-500 leading-relaxed">
                Setiap masukan rich-text difilter secara ketat sebelum dirender ke DOM untuk mencegah celah keamanan injeksi skrip (XSS).
              </p>
            </div>
          </div>
        </div>
      `;

    case 'desktop-companion':
      return `
        <div class="space-y-5 animate-fade-in">
          <div class="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div class="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg font-bold">
              💻
            </div>
            <div>
              <h4 class="text-base font-extrabold text-content-main">BLineNote Desktop Offline Edition</h4>
              <p class="text-xs text-slate-400">Versi aplikasi mandiri untuk lingkungan kerja terisolasi</p>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-purple-500"></span>
                <span class="font-bold text-xs text-purple-900">BLineNote Standalone Workstation</span>
              </div>
              <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white text-purple-800 font-bold border border-purple-200">
                Offline Mode
              </span>
            </div>

            <p class="text-xs text-purple-950/80 leading-relaxed">
              Disediakan khusus untuk workstation yang memerlukan isolasi jaringan total (Air-Gapped / Private Intranet) tanpa komunikasi ke server publik.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div class="bg-white/80 p-3 rounded-xl border border-purple-100">
                <span class="font-bold text-purple-900 block mb-1">📦 Standalone Executable</span>
                <span class="text-slate-500">Aplikasi mandiri siap pakai tanpa dependensi runtime eksternal.</span>
              </div>
              <div class="bg-white/80 p-3 rounded-xl border border-purple-100">
                <span class="font-bold text-purple-900 block mb-1">🔌 100% Offline Storage</span>
                <span class="text-slate-500">Seluruh berkas catatan tersimpan secara lokal di media penyimpanan perangkat.</span>
              </div>
              <div class="bg-white/80 p-3 rounded-xl border border-purple-100">
                <span class="font-bold text-purple-900 block mb-1">🎤 Local Recording</span>
                <span class="text-slate-500">Perekaman audio dan penulisan catatan terlindungi di ruang kerja lokal.</span>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}
