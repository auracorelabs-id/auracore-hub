/**
 * @file toast.js
 * @description Hardened lightweight UI toast notification service for AuraCore Labs.
 * Immune to DOM XSS via strict HTML entity escaping.
 */

/**
 * Escape HTML characters to prevent XSS injection
 * @param {string} str
 * @returns {string}
 */
export function escapeHTML(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Show a floating toast notification safely
 * @param {string} title
 * @param {string} message
 * @param {'success' | 'info' | 'warning'} type
 * @param {number} durationMs
 */
export function showToast(title, message, type = 'success', durationMs = 4500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-soft-xl max-w-sm transform transition-all duration-300 translate-y-4 opacity-0 z-50`;
  
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
  
  // Safe HTML escaped interpolation
  const safeTitle = escapeHTML(title);
  const safeMessage = escapeHTML(message);

  toast.innerHTML = `
    <span class="text-xl flex-shrink-0 mt-0.5">${icon}</span>
    <div class="flex-1">
      <div class="text-xs font-bold text-content-main">${safeTitle}</div>
      <div class="text-xs text-slate-500 mt-0.5 leading-relaxed">${safeMessage}</div>
    </div>
    <button type="button" class="text-slate-400 hover:text-slate-600 text-xs font-bold p-1" aria-label="Close">✕</button>
  `;

  toast.querySelector('button')?.addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  // Animate In
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  // Auto Dismiss
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, durationMs);
}
