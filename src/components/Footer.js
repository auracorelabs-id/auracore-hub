/**
 * @file Footer.js
 * @description Clean, lightweight enterprise footer for AuraCore Labs.
 * @param {Object} navigationData
 * @returns {string} HTML markup
 */

export function renderFooter(navigationData) {
  const { socialLinks, legalLinks } = navigationData;

  return `
    <footer class="mt-16 border-t border-slate-200/80 bg-white/70 backdrop-blur-sm py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <!-- Brand Info -->
          <div class="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dnbahfdbd/image/upload/v1769954186/logo2_womokl.png" 
              alt="AuraCore Icon" 
              class="w-7 h-7 object-contain"
              width="28"
              height="28"
            />
            <div>
              <span class="text-sm font-extrabold text-content-main">AuraCore Labs Indonesia</span>
              <p class="text-xs text-slate-500">Software & AI Engineering Studio · Solusi Digital Enterprise & Healthcare</p>
            </div>
          </div>

          <!-- Direct Contacts (WhatsApp & Email) & Social Links -->
          <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
            <a 
              href="https://wa.me/6282256657700" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/60 transition-colors font-bold"
            >
              <span>💬</span>
              <span>WhatsApp: +62 822-5665-7700</span>
            </a>
            ${socialLinks.filter(s => s.name !== 'WhatsApp').map(s => `
              <a 
                href="${s.url}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:text-brand-blue transition-colors px-2.5 py-1 rounded-md hover:bg-slate-50"
              >
                ${s.name}
              </a>
            `).join('')}
          </div>
        </div>

        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 AuraCore Labs Indonesia. All rights reserved. Melayani proyek pengembangan digital seluruh Indonesia.</p>
          <div class="flex items-center gap-4">
            <span class="inline-flex items-center gap-1 text-slate-500">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Engineering SLA Active
            </span>
            <span>·</span>
            <span>Enterprise Security Tested</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
