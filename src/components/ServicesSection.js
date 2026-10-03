/**
 * @file ServicesSection.js
 * @description Enterprise Software & AI Engineering Services Section for AuraCore Labs.
 * Showcases core service offerings, engineering workflows, and value propositions
 * designed to convert B2B clients and commercial leads.
 */

import { 
  IconActivity, 
  IconAudioLines, 
  IconShieldCheck, 
  IconCpu, 
  IconTarget, 
  IconFileCode, 
  IconCheck, 
  IconArrowRight,
  IconWhatsApp
} from './icons.js';

export function renderServicesSection() {
  const services = [
    {
      id: 'enterprise-healthcare',
      icon: IconActivity('w-6 h-6 text-indigo-600'),
      title: 'Sistem Digital Enterprise & Healthcare EMR',
      badge: 'Solusi Utama',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Pengembangan sistem informasi manajemen terintegrasi untuk rumah sakit, klinik, dan bisnis. Meminimalkan waktu administrasi dengan alur kerja cepat dan minim klik.',
      capabilities: [
        'Arsitektur Rekam Medis (RME) siap integrasi SatuSehat Kemenkes (FHIR API Ready)',
        'Sistem Antrean Farmasi, Laboratorium, & Billing Terpadu',
        'Dukungan integrasi API Bridging BPJS Kesehatan & Manajemen Klaim',
        'Dashboard Analitik Operasional & Manajemen Inventaris Obat'
      ],
      proof: 'Dibangun di atas fondasi arsitektur AuraCore Health.',
      accent: 'border-indigo-100 hover:border-indigo-300'
    },
    {
      id: 'generative-ai',
      icon: IconAudioLines('w-6 h-6 text-amber-600'),
      title: 'Integrasi Generative AI, Speech & Otomasi Cerdas',
      badge: 'Teknologi Unggulan',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Menghubungkan kecerdasan buatan (Gemini & OpenAI) langsung ke proses bisnis harian Anda untuk mengotomasi tugas repetitif dan transkripsi suara.',
      capabilities: [
        'Transkripsi Suara Medis & Notulensi Otomatis (Speech-to-Text)',
        'AI Assistant Kustom terlatih khusus dengan dokumen internal Anda',
        'Ekstraksi Informasi Otomatis dari PDF, Formulir, & Faktur',
        'Arsitektur Local-First & Cloud Hybrid untuk perlindungan privasi data'
      ],
      proof: 'Terbukti pada implementasi kecerdasan suara BLineNote.',
      accent: 'border-amber-100 hover:border-amber-300'
    },
    {
      id: 'cybersecurity',
      icon: IconShieldCheck('w-6 h-6 text-sky-600'),
      title: 'Keamanan Siber, Zero-Knowledge Vault & Audit Kode',
      badge: 'Keamanan Tingkat Tinggi',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'Perlindungan menyeluruh terhadap data rahasia perusahaan dan kredensial sensitif dengan standar kriptografi modern berkinerja tinggi.',
      capabilities: [
        'Audit Celah Keamanan Kode (XSS, CSRF, Injeksi, Misconfiguration)',
        'Enkripsi Sisi Pengguna (Client-Side AES-GCM-256 via Web Crypto)',
        'Sistem Penyimpanan Kredensial & Dokumen Rahasia Tanpa Akses Server',
        'Pengerasan Header HTTP, CSP Ketat, & Pencegahan Kebocoran Data'
      ],
      proof: 'Diterapkan pada sistem keamanan SimpanPassword.',
      accent: 'border-sky-100 hover:border-sky-300'
    },
    {
      id: 'desktop-native',
      icon: IconCpu('w-6 h-6 text-teal-600'),
      title: 'Aplikasi Desktop Windows Native & Otomasi Hardware',
      badge: 'Performa Cepat',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Pengembangan software utilitas berperforma tinggi tanpa bloatware untuk sistem Windows x64 dan interaksi hardware / perangkat Android.',
      capabilities: [
        'Software Desktop Windows x64 Native tanpa ketergantungan berat',
        'Manajemen & Pemindaian Integritas Perangkat Android via ADB',
        'Otomasi Periferal Kasir, Printer Thermal, & Barcode Scanner',
        'Dukungan Penuh Operasional Offline tanpa ketergantungan internet'
      ],
      proof: 'Terimplementasi pada software AuraCore Sentinel v1.0.0.',
      accent: 'border-emerald-100 hover:border-emerald-300'
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Konsultasi & Analisis Kebutuhan',
      desc: 'Diskusi mendalam bersama tim software engineer kami via WhatsApp atau Google Meet untuk memetakan alur kerja spesifik dan masalah bisnis Anda secara gratis.'
    },
    {
      number: '02',
      title: 'Spesifikasi & Rencana Anggaran Terbuka',
      desc: 'Kami menyusun proposal arsitektur teknis, estimasi timeline terukur, dan rincian biaya transparan tanpa ada biaya tersembunyi.'
    },
    {
      number: '03',
      title: 'Pengembangan Agile & Staging Mingguan',
      desc: 'Sistem dibangun secara modular. Anda mendapatkan tautan uji coba (staging) tiap minggu untuk memantau progres dan memberikan masukan langsung.'
    },
    {
      number: '04',
      title: 'Audit Keamanan, Pelatihan & Rilis',
      desc: 'Sebelum peluncuran, seluruh kode diaudit dari celah keamanan, konfigurasi server dioptimasi, dan staf Anda diberikan panduan pengoperasian lengkap.'
    },
    {
      number: '05',
      title: 'Garansi Bug-Free & Dukungan SLA',
      desc: 'Jaminan perbaikan bug bebas biaya serta dukungan pemeliharaan jangka panjang agar operasional sistem Anda selalu prima tanpa gangguan.'
    }
  ];

  return `
    <div id="services-section" class="space-y-16 pt-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/80">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>LAYANAN REKAYASA & KONSULTASI SOFTWARE</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-content-main tracking-tight leading-tight">
          Solusi Perangkat Lunak Kustom & AI <br class="hidden sm:block"/>
          <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            Siap Pakai untuk Bisnis Anda
          </span>
        </h2>
        <p class="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
          Kami bukan sekadar pembuat halaman web biasa. Kami adalah tim rekayasa perangkat lunak yang merancang sistem inti bisnis, integrasi kecerdasan buatan, dan keamanan data tingkat tinggi dengan standar enterprise.
        </p>
      </div>

      <!-- 4 Core Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${services.map(s => `
          <div class="organic-card p-6 sm:p-8 space-y-5 border ${s.accent} transition-all duration-300 hover:shadow-soft-xl flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between gap-3">
                <div class="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-soft-sm flex-shrink-0">
                  ${s.icon}
                </div>
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full border ${s.badgeColor}">
                  ${s.badge}
                </span>
              </div>
              <div>
                <h3 class="text-lg font-bold text-content-main leading-snug">${s.title}</h3>
                <p class="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-normal">
                  ${s.description}
                </p>
              </div>

              <!-- Capabilities Bullet Points -->
              <div class="pt-2 border-t border-slate-100">
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Kapabilitas Utama:</span>
                <ul class="space-y-2">
                  ${s.capabilities.map(cap => `
                    <li class="flex items-start gap-2 text-xs text-slate-600">
                      ${IconCheck('w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5')}
                      <span>${cap}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Proof of Work Anchor -->
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-400 font-medium text-[11px] italic">
                ${s.proof}
              </span>
              <a 
                href="#console-section" 
                data-action="switch-to-consultation"
                data-service="${s.id}"
                class="font-bold text-brand-blue hover:text-blue-700 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Konsultasikan</span>
                ${IconArrowRight('w-3.5 h-3.5')}
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Why Work With Us: 3 Value Pillars -->
      <div class="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white space-y-8 shadow-xl">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="text-[11px] font-bold tracking-widest text-emerald-400 uppercase">STANDAR KERJA PROFESIONAL</span>
          <h3 class="text-xl sm:text-3xl font-black tracking-tight">Mengapa Klien Memilih AuraCore Labs?</h3>
          <p class="text-xs sm:text-sm text-slate-300">Tiga komitmen inti yang membedakan kami dari vendor software tradisional.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
              ${IconTarget('w-5 h-5 text-emerald-400')}
            </div>
            <h4 class="text-sm font-bold text-white">Bicara Langsung dengan Engineer</h4>
            <p class="text-xs text-slate-300 leading-relaxed font-normal">
              Tidak ada perantara sales yang melebih-lebihkan janji. Anda berdiskusi langsung dengan arsitek sistem yang memahami logika kode dan batasan teknis.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-lg">
              ${IconShieldCheck('w-5 h-5 text-sky-400')}
            </div>
            <h4 class="text-sm font-bold text-white">Keamanan Kode Bergaransi</h4>
            <p class="text-xs text-slate-300 leading-relaxed font-normal">
              Setiap baris kode diuji terhadap serangan injeksi, XSS, dan kebocoran data dengan enkripsi modern berstandar enterprise sebelum diserahkan.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
              ${IconFileCode('w-5 h-5 text-indigo-400')}
            </div>
            <h4 class="text-sm font-bold text-white">Source Code 100% Hak Milik Anda</h4>
            <p class="text-xs text-slate-300 leading-relaxed font-normal">
              Tidak ada penguncian vendor (vendor lock-in). Seluruh kode sumber, dokumentasi arsitektur, dan database diserahkan penuh kepada Anda.
            </p>
          </div>
        </div>
      </div>

      <!-- Transparent 5-Step Workflow -->
      <div class="space-y-8">
        <div class="text-center max-w-xl mx-auto space-y-2">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase">ALUR KERJA TRANSPARAN</span>
          <h3 class="text-xl sm:text-2xl font-black text-content-main">5 Langkah Dari Ide Hingga Sistem Beroperasi</h3>
          <p class="text-xs text-slate-500">Proses terstruktur yang memastikan proyek Anda selesai tepat waktu dan sesuai ekspektasi.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          ${workflowSteps.map(step => `
            <div class="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-sm space-y-2.5 relative">
              <span class="text-2xl font-black text-slate-200 block font-mono">${step.number}</span>
              <h4 class="text-xs font-bold text-content-main">${step.title}</h4>
              <p class="text-[11px] text-slate-500 leading-relaxed font-normal">${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Direct Consultation Callout -->
      <div class="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div class="space-y-1.5 max-w-xl">
          <h4 class="text-base sm:text-lg font-bold text-blue-950">Punya Kebutuhan Software Khusus atau Ingin Bertanya Dulu?</h4>
          <p class="text-xs sm:text-sm text-blue-800/80 leading-relaxed">
            Konsultasikan rencana digitalisasi institusi Anda tanpa komitmen. Kami siap memberikan masukan arsitektur teknis dan estimasi biaya secara realistis.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
          <a 
            href="https://wa.me/6282256657700?text=Halo%20Tim%20AuraCore%20Labs%2C%20saya%20ingin%20konsultasi%20kebutuhan%20jasa%20pengembangan%20software%20untuk%20bisnis%20saya." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="pill-btn-primary px-6 py-3 text-xs font-bold w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm"
          >
            ${IconWhatsApp('w-4 h-4')}
            <span>Diskusi Cepat via WhatsApp</span>
          </a>
          <a 
            href="#console-section" 
            class="pill-btn-secondary px-6 py-3 text-xs font-bold w-full sm:w-auto"
          >
            Isi Form Permintaan Proyek ↓
          </a>
        </div>
      </div>

    </div>
  `;
}
