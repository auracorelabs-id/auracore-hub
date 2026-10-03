/**
 * @file ProductDetail.js
 * @description Universal Product Detail Page component for AuraCore Labs.
 * Renders an in-depth, dedicated specification page for any chosen product:
 * - blinenote: AI speech-to-text, client-side AES-256 E2EE, 2FA TOTP, smart editor, Windows portable. (Zero GitHub links!)
 * - sentinel: Android malware heuristics, ADB device manager, portable Windows x64 binary.
 * - simpanpassword: Zero-knowledge password vault, Web Crypto AES-GCM-256, PBKDF2.
 * - health: Smart hospital EMR, HL7/FHIR workflow, integrated queuing, pharmacy dispatch.
 * - ai-analytics: Predictive healthcare ML, PyTorch edge inference, XAI models.
 */

import { renderBLineNoteDetail, getDetailTabMarkup } from './BLineNoteDetail.js';
import { IconCheck, IconLock, IconActivity, IconWrench, IconBrainCircuit } from './icons.js';

export function renderProductDetail(product, activeSubTab = 'overview') {
  if (!product) return `<div class="p-8 text-center text-slate-500">Produk tidak ditemukan.</div>`;

  // For BLineNote, utilize the specialized deep-dive component
  if (product.id === 'blinenote') {
    return renderBLineNoteDetail(activeSubTab || 'ai-audio');
  }

  // Universal Deep Dive for other products
  return `
    <div class="max-w-6xl xl:max-w-7xl mx-auto space-y-10 animate-fade-in pb-12 w-full">
      
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
          <span class="font-medium text-slate-500">${product.category}</span>
          <span>/</span>
          <span class="font-bold text-brand-blue">${product.name}</span>
        </div>
      </div>

      <!-- Hero Header Section -->
      <div class="text-center space-y-4 pt-2">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${product.accentBg} ${product.accentText} text-xs font-bold shadow-soft-sm border ${product.accentBorder}">
          <span class="w-2 h-2 rounded-full" style="background-color: ${product.themeColor}"></span>
          <span>SPESIFIKASI & ARSITEKTUR PRODUK</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-black text-content-main tracking-tight leading-tight">
          ${product.name}
          <span class="block text-xl sm:text-2xl font-bold text-slate-500 mt-1">
            ${product.subtitle}
          </span>
        </h1>

        <p class="text-content-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          "${product.tagline}"
        </p>

        <!-- Quick Launch CTA Pills -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-3">
          ${product.actions.primary.isExternal ? `
            <a 
              href="${product.actions.primary.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="pill-btn-primary px-7 py-3 text-xs flex items-center gap-2"
            >
              <span>${product.actions.primary.label}</span>
              <span>↗</span>
            </a>
          ` : `
            <button 
              type="button" 
              data-action="open-request-modal" 
              data-preselect="${product.id}"
              class="pill-btn-primary px-7 py-3 text-xs flex items-center gap-2"
            >
              <span>${product.actions.primary.label}</span>
              <span>→</span>
            </button>
          `}

          ${product.actions.secondary?.isExternal ? `
            <a 
              href="${product.actions.secondary.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="pill-btn-secondary px-6 py-3 text-xs flex items-center gap-2"
            >
              <span>${product.actions.secondary.label} ↗</span>
            </a>
          ` : ''}

          ${product.actions.portable?.isExternal ? `
            <a 
              href="${product.actions.portable.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="pill-btn-secondary px-6 py-3 text-xs flex items-center gap-2"
            >
              <span>${product.actions.portable.label} ⬇</span>
            </a>
          ` : ''}
        </div>
      </div>

      <!-- Grand Organic Showcase Card -->
      <div class="organic-card p-6 sm:p-10 space-y-8 border border-slate-100">
        
        <!-- Summary Info -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Deskripsi Solusi</span>
            <p class="text-sm sm:text-base text-content-body leading-relaxed mt-2">
              ${product.description}
            </p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-xs font-bold px-3 py-1.5 rounded-full ${product.accentBg} ${product.accentText} border ${product.accentBorder}">
              ${product.badge}
            </span>
          </div>
        </div>

        <!-- Technical Telemetry / Simulation Frame -->
        <div class="py-2">
          ${getProductTelemetry(product)}
        </div>

        <!-- Poin Keunggulan Arsitektur -->
        <div class="space-y-3 pt-2">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Keunggulan & Karakteristik Kunci:</div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${product.highlights.map(h => `
              <div class="p-4 rounded-2xl bg-slate-50/80 text-xs text-content-body flex items-start gap-3 border border-slate-100">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  ${IconCheck('w-3 h-3 text-emerald-600')}
                </span>
                <span class="font-medium leading-relaxed">${h}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Metrics Table -->
        <div class="pt-4 border-t border-slate-100 space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Parameter & Metrik Teknis:</div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            ${Object.entries(product.metrics).map(([key, val]) => `
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span class="text-[10px] uppercase font-bold text-slate-400 block">${key}</span>
                <span class="text-xs font-extrabold text-content-main mt-0.5 block truncate">${val}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tech Stack Pills -->
        <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span class="text-xs text-slate-400 font-semibold mr-1">Teknologi yang Digunakan:</span>
          ${product.techStack.map(t => `
            <span class="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">${t}</span>
          `).join('')}
        </div>

      </div>

      <!-- Bottom Call to Action -->
      <div class="text-center p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
        <h3 class="text-2xl font-black">Tertarik Berkolaborasi atau Menguji ${product.name}?</h3>
        <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Tim riset dan rekayasa perangkat lunak AuraCore Labs siap mendiskusikan integrasi kustom dan uji coba penerapan.
        </p>
        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button 
            type="button" 
            data-action="open-request-modal" 
            data-preselect="${product.id}"
            class="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg hover:bg-slate-100 hover:scale-105 transition-all"
          >
            Ajukan Akses & Diskusi Tim →
          </button>
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

function getProductTelemetry(product) {
  switch (product.id) {
    case 'sentinel':
      return `
        <div class="relative bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs shadow-2xl border border-slate-800 overflow-hidden">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span class="text-slate-300 font-sans font-semibold text-xs ml-2">AuraCore Sentinel Console</span>
            </div>
            <span class="text-[11px] font-sans text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/50">
              Live ADB Inspection Active
            </span>
          </div>
          <div class="space-y-2 text-slate-300">
            <div class="flex items-center gap-2 text-emerald-400 font-bold">
              <span>❯</span>
              <span>sentinel scan --mode=heuristic --deep-verify</span>
            </div>
            <p class="text-slate-400 text-[11px] pl-4">Scanning system packages, ADB intrusion logs & sideloaded APK signatures...</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
                <span class="text-[10px] uppercase font-bold text-slate-400 block">Total Packages</span>
                <span class="text-base font-extrabold text-white">142 Apps</span>
                <span class="text-[10px] text-emerald-400 block mt-0.5">● 100% Verified</span>
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
                <span class="text-[10px] uppercase font-bold text-slate-400 block">Root / Intrusion</span>
                <span class="text-base font-extrabold text-white">Clean</span>
                <span class="text-[10px] text-emerald-400 block mt-0.5">● No Rogues Found</span>
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
                <span class="text-[10px] uppercase font-bold text-slate-400 block">Integrity Verdict</span>
                <span class="text-base font-extrabold text-emerald-400 font-sans">PASS</span>
                <span class="text-[10px] text-slate-400 block mt-0.5">SHA-256 Match</span>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'simpanpassword':
      return `
        <div class="relative bg-gradient-to-br from-slate-900 via-sky-950/80 to-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-sky-800/50 overflow-hidden">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-sky-900/60">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center text-sm shadow-inner">
                ${IconLock('w-4 h-4 text-sky-300')}
              </div>
              <span class="font-sans font-bold text-sm text-white">Zero-Knowledge Vault Architecture</span>
            </div>
            <span class="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 font-semibold">
              Web Crypto Native
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div class="bg-slate-800/70 p-3.5 rounded-xl border border-sky-800/40">
              <div class="text-[10px] uppercase font-bold text-sky-300 tracking-wider">Client-Side Cipher</div>
              <div class="text-sm font-mono font-bold text-white mt-1">AES-GCM-256</div>
              <p class="text-[11px] text-slate-400 mt-1">Kunci enkripsi tidak pernah dikirim atau disimpan di server.</p>
            </div>
            <div class="bg-slate-800/70 p-3.5 rounded-xl border border-sky-800/40">
              <div class="text-[10px] uppercase font-bold text-sky-300 tracking-wider">Master Key Derivation</div>
              <div class="text-sm font-mono font-bold text-white mt-1">PBKDF2 + SHA-256</div>
              <p class="text-[11px] text-slate-400 mt-1">Dilengkapi proteksi brute-force dengan 100,000+ iterasi.</p>
            </div>
          </div>
        </div>
      `;

    case 'health':
      return `
        <div class="relative bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-indigo-800/50 overflow-hidden">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-indigo-900/60">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-sm shadow-inner">
                ${IconActivity('w-4 h-4 text-indigo-300')}
              </div>
              <span class="font-sans font-bold text-sm text-white">Smart Hospital EMR & Workflow</span>
            </div>
            <span class="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 font-semibold">
              FHIR / HL7 Ready
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-center">
            <div class="bg-slate-800/70 p-3 rounded-xl border border-indigo-800/40">
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Antrean Terpadu</span>
              <span class="text-sm font-extrabold text-indigo-300 mt-1 block">Real-Time Sync</span>
              <span class="text-[10px] text-slate-400 block mt-0.5">Integrasi BPJS & Mandiri</span>
            </div>
            <div class="bg-slate-800/70 p-3 rounded-xl border border-indigo-800/40">
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Rekam Medis (EMR)</span>
              <span class="text-sm font-extrabold text-emerald-400 mt-1 block">Paperless 100%</span>
              <span class="text-[10px] text-slate-400 block mt-0.5">ICD-10 Diagnosa Cepat</span>
            </div>
            <div class="bg-slate-800/70 p-3 rounded-xl border border-indigo-800/40">
              <span class="text-[10px] uppercase font-bold text-slate-400 block">Farmasi & Logistik</span>
              <span class="text-sm font-extrabold text-amber-300 mt-1 block">Auto-Dispatch</span>
              <span class="text-[10px] text-slate-400 block mt-0.5">Monitoring Stok Kritis</span>
            </div>
          </div>
        </div>
      `;

    case 'itsupport':
      return `
        <div class="space-y-6">
          
          <!-- Live Real Application Window Showcase -->
          <div class="rounded-3xl border border-slate-200/90 bg-slate-900 shadow-soft-xl overflow-hidden">
            <!-- Window Title Bar -->
            <div class="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span class="text-xs font-mono text-slate-300 ml-2 hidden sm:inline truncate">
                  IT Support Center 2026 (v3.2.0 Enterprise) — AuraCore (https://www.auracore.my.id)
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-teal-300 font-bold px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-700/50">
                  87 Modul IT · Real Windows App
                </span>
              </div>
            </div>

            <!-- Authentic Screenshot Image -->
            <div class="relative bg-slate-950 overflow-hidden group">
              <img 
                src="/screenshots/itsupport-center.png" 
                alt="Tangkapan Layar Asli Antarmuka IT Support Center 2026 v3.2.0 Enterprise" 
                class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.008]"
                loading="lazy"
                width="1536"
                height="864"
              />
              <div class="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700 text-[11px] text-slate-200 flex items-center gap-2 shadow-lg">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="font-medium">Antarmuka Asli Aplikasi (.NET 8 WinForms GUI + Live Console)</span>
              </div>
            </div>
          </div>

          <!-- Official Release Download & Repository Banner -->
          <div class="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-slate-900 text-white border border-teal-800/50 shadow-xl space-y-4">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span class="text-xs font-bold text-teal-300 uppercase tracking-wider">Rilis Publik Resmi v3.2.0 Enterprise</span>
                </div>
                <h4 class="text-xl font-black text-white">Unduh IT Support Center & Akses Source Code</h4>
                <p class="text-xs text-slate-300 max-w-xl leading-relaxed">
                  Tersedia installer binary x64 siap pakai atau arsip portable zip tanpa instalasi, serta repositori kode terbuka di GitHub.
                </p>
              </div>

              <!-- Quick Action Download Buttons -->
              <div class="flex flex-wrap items-center gap-3">
                <a 
                  href="https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases/download/v3.2.0/ITSupportCenter.exe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="px-5 py-3 rounded-2xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>⬇ Unduh .exe (Single-File)</span>
                  <span class="text-[10px] bg-slate-950/20 px-2 py-0.5 rounded font-mono font-bold">72 MB</span>
                </a>
                <a 
                  href="https://github.com/protontekno-bit/ITSUPPORT_CENTER/releases/download/v3.2.0/ITSupportCenter-v3.2.0-Portable.zip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>📦 Unduh Portable (.zip)</span>
                  <span class="text-[10px] text-teal-300 font-mono">68 MB</span>
                </a>
                <a 
                  href="https://github.com/protontekno-bit/ITSUPPORT_CENTER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub Repository ↗</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Feature Capability Telemetry -->
          <div class="relative bg-gradient-to-br from-slate-900 via-teal-950/80 to-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-teal-800/50 overflow-hidden font-sans">
            <div class="flex items-center justify-between pb-3 mb-4 border-b border-teal-900/60">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-sm shadow-inner">
                  ${IconWrench('w-4 h-4 text-teal-300')}
                </div>
                <span class="font-bold text-sm text-white">IT Support & Security Center Engine</span>
              </div>
              <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 font-semibold font-mono">
                86+ Modul · Dual Engine
              </span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div class="bg-slate-800/80 p-3.5 rounded-xl border border-teal-800/40">
                <span class="text-[10px] uppercase font-bold text-teal-300 block">Hardware & Diagnostics</span>
                <span class="text-sm font-bold text-white mt-1 block">SMART SSD & Battery</span>
                <p class="text-[11px] text-slate-400 mt-1">Audit BitLocker, BIOS OEM serial, dan thermal sensor real-time.</p>
              </div>
              <div class="bg-slate-800/80 p-3.5 rounded-xl border border-teal-800/40">
                <span class="text-[10px] uppercase font-bold text-teal-300 block">Printer & Spooler Eng.</span>
                <span class="text-sm font-bold text-emerald-400 mt-1 block">Fix Error 0x0000011b</span>
                <p class="text-[11px] text-slate-400 mt-1">Spooler queue purger (.SHD/.SPL) dan reset total printer stack.</p>
              </div>
              <div class="bg-slate-800/80 p-3.5 rounded-xl border border-teal-800/40">
                <span class="text-[10px] uppercase font-bold text-teal-300 block">Security & Air-Gap</span>
                <span class="text-sm font-bold text-amber-300 mt-1 block">1-Sec Network Air-Gap</span>
                <p class="text-[11px] text-slate-400 mt-1">Karantina instan serangan ransomware dan firewall factory reset.</p>
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-teal-800/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-slate-300 font-medium">Dual Interface: C# .NET 8 WinForms GUI + Zero-Dependency Windows Batch CLI</span>
              </div>
              <span class="text-[11px] font-mono text-teal-300 font-bold px-2 py-0.5 rounded bg-teal-900/50">
                HTML Report Generator Ready
              </span>
            </div>
          </div>

        </div>
      `;

    default: // ai-analytics
      return `
        <div class="relative bg-gradient-to-br from-slate-900 via-purple-950/80 to-slate-900 rounded-2xl p-6 text-white shadow-2xl border border-purple-800/50 overflow-hidden">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-purple-900/60">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm shadow-inner">
                ${IconBrainCircuit('w-4 h-4 text-purple-300')}
              </div>
              <span class="font-sans font-bold text-sm text-white">Biomedical ML Inference Pipeline</span>
            </div>
            <span class="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-semibold">
              PyTorch Research
            </span>
          </div>
          <div class="space-y-2 text-xs">
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-800/70 border border-purple-800/40">
              <span class="text-slate-300">Model Anomali Diagnostik</span>
              <span class="font-mono text-purple-300 font-bold">Accuracy 96.8%</span>
            </div>
            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-800/70 border border-purple-800/40">
              <span class="text-slate-300">Latency Inferensi Edge</span>
              <span class="font-mono text-emerald-400 font-bold">&lt; 38 ms</span>
            </div>
          </div>
        </div>
      `;
  }
}
