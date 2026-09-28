/**
 * @file TechEcosystemGraphic.js
 * @description Interactive & Animated 3D Isometric Ecosystem Canvas for AuraCore Labs.
 * Pure SVG + GPU-accelerated CSS animations. Ultra-lightweight (<15KB), Retina crisp, 60fps.
 * Interconnected nodes for Sentinel, SimpanPassword, Health, and AI Analytics linked to Central Core.
 * @param {string} activeProductId
 * @returns {string} HTML markup
 */

export function renderTechEcosystemGraphic(activeProductId = 'sentinel') {
  return `
    <div class="relative w-full max-w-3xl mx-auto py-2 my-2 overflow-hidden select-none">
      
      <!-- Ambient Background Glow Spheres -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Main SVG Ecosystem Canvas -->
      <svg 
        viewBox="0 0 800 440" 
        class="w-full h-auto drop-shadow-soft-xl relative z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AuraCore Labs Intelligent Ecosystem Architecture"
      >
        <defs>
          <!-- Gradients -->
          <linearGradient id="corePedestal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#f1f5f9" stop-opacity="0.7" />
          </linearGradient>

          <linearGradient id="streamEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>

          <linearGradient id="streamSky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>

          <linearGradient id="streamIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>

          <linearGradient id="streamPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7c3aed" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>

          <linearGradient id="streamAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>

          <linearGradient id="streamTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f766e" />
            <stop offset="100%" stop-color="#3b82f6" />
          </linearGradient>

          <!-- Node Glow Filters -->
          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>

        <style>
          /* CSS Keyframes for Ecosystem Animation */
          @keyframes ecoFloatA {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes ecoFloatB {
            0%, 100% { transform: translateY(-4px); }
            50% { transform: translateY(5px); }
          }
          @keyframes ecoPulseRing {
            0% { r: 35px; opacity: 0.8; stroke-width: 2px; }
            100% { r: 90px; opacity: 0; stroke-width: 0.5px; }
          }
          @keyframes dataStreamFast {
            to { stroke-dashoffset: -32; }
          }
          @keyframes coreSpinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .eco-node-a { animation: ecoFloatA 5s ease-in-out infinite; transform-origin: center; }
          .eco-node-b { animation: ecoFloatB 6s ease-in-out infinite 0.6s; transform-origin: center; }
          .eco-node-c { animation: ecoFloatA 5.5s ease-in-out infinite 1.2s; transform-origin: center; }
          .eco-node-d { animation: ecoFloatB 6.5s ease-in-out infinite 1.8s; transform-origin: center; }

          .stream-path {
            stroke-dasharray: 4 8;
            animation: dataStreamFast 1.4s linear infinite;
          }

          .pulse-ring {
            animation: ecoPulseRing 3.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
            transform-origin: 400px 220px;
          }

          .interactive-node {
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .interactive-node:hover {
            filter: brightness(1.08) drop-shadow(0 8px 20px rgba(37,99,235,0.25));
          }
        </style>

        <!-- Base Circuit Floor Grid (Isometric Perspective) -->
        <g opacity="0.35">
          <ellipse cx="400" cy="220" rx="340" ry="150" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 4" />
          <ellipse cx="400" cy="220" rx="220" ry="95" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 6" />
          <ellipse cx="400" cy="220" rx="110" ry="48" fill="none" stroke="#64748b" stroke-width="1.5" />
        </g>

        <!-- Dynamic Pulse Waves from Central Hub -->
        <circle cx="400" cy="220" class="pulse-ring" fill="none" stroke="#3b82f6" />
        <circle cx="400" cy="220" class="pulse-ring" style="animation-delay: 1.5s;" fill="none" stroke="#0284c7" />

        <!-- 4 Data Highway Streams (Connecting Core to Nodes) -->
        <!-- Stream 1: Top-Left (Sentinel) -->
        <path d="M 400 220 L 190 120" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <path d="M 400 220 L 190 120" fill="none" stroke="url(#streamEmerald)" stroke-width="2.5" class="stream-path" />

        <!-- Stream 2: Top-Right (SimpanPassword) -->
        <path d="M 400 220 L 610 120" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <path d="M 400 220 L 610 120" fill="none" stroke="url(#streamSky)" stroke-width="2.5" class="stream-path" />

        <!-- Stream 3: Bottom-Left (AuraCore Health) -->
        <path d="M 400 220 L 190 320" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <path d="M 400 220 L 190 320" fill="none" stroke="url(#streamIndigo)" stroke-width="2.5" class="stream-path" />

        <!-- Stream 4: Bottom-Right (AI Health Analytics) -->
        <path d="M 400 220 L 610 320" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <path d="M 400 220 L 610 320" fill="none" stroke="url(#streamPurple)" stroke-width="2.5" class="stream-path" />

        <!-- Stream 5: Top-Center (BLineNote AI Voice) -->
        <path d="M 400 220 L 400 78" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <path d="M 400 220 L 400 78" fill="none" stroke="url(#streamAmber)" stroke-width="2.5" class="stream-path" />

        <!-- Stream 6: Bottom-Center (IT Support & Security Center) -->
        <path d="M 400 220 L 400 345" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <path d="M 400 220 L 400 345" fill="none" stroke="url(#streamTeal)" stroke-width="2.5" class="stream-path" />

        <!-- ================= CENTRAL CORE HUB ================= -->
        <g id="central-core" class="interactive-node" data-node-id="core">
          <!-- Shadow Base -->
          <ellipse cx="400" cy="245" rx="55" ry="24" fill="#0f172a" opacity="0.08" />
          
          <!-- Isometric Pedestal Glass Disc -->
          <ellipse cx="400" cy="225" rx="60" ry="26" fill="url(#corePedestal)" stroke="#e2e8f0" stroke-width="2" filter="url(#softShadow)" />
          
          <!-- Glowing Core Cylinder -->
          <ellipse cx="400" cy="215" rx="46" ry="20" fill="#ffffff" stroke="#3b82f6" stroke-width="2" />
          
          <!-- Core Halo -->
          <circle cx="400" cy="210" r="28" fill="#2563eb" opacity="0.1" filter="url(#glowLight)" />

          <!-- Center AuraCore Icon / Hologram -->
          <g transform="translate(382, 192)">
            <rect width="36" height="36" rx="10" fill="#2563eb" filter="url(#softShadow)" />
            <image 
              href="https://res.cloudinary.com/dnbahfdbd/image/upload/v1769952310/auracore_logo.png" 
              x="3" y="3" width="30" height="30" 
            />
          </g>

          <!-- Core Label Badge -->
          <g transform="translate(340, 252)">
            <rect width="120" height="22" rx="11" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" filter="url(#softShadow)" />
            <text x="60" y="15" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#0f172a">AURACORE CORE</text>
          </g>
        </g>

        <!-- ================= NODE 1: SENTINEL (Top-Left) ================= -->
        <g id="node-sentinel" class="interactive-node eco-node-a" data-product-id="sentinel" transform="translate(0, 0)">
          <!-- Ground Shadow -->
          <ellipse cx="190" cy="148" rx="45" ry="16" fill="#0f172a" opacity="0.07" />
          
          <!-- Active Highlight Aura -->
          ${activeProductId === 'sentinel' ? `
            <circle cx="190" cy="110" r="44" fill="#10b981" opacity="0.18" filter="url(#glowLight)" />
            <circle cx="190" cy="110" r="36" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3 3" />
          ` : ''}

          <!-- Floating Glass Node Card -->
          <rect x="145" y="75" width="90" height="70" rx="18" fill="#ffffff" stroke="${activeProductId === 'sentinel' ? '#10b981' : '#e2e8f0'}" stroke-width="${activeProductId === 'sentinel' ? '2.5' : '1.5'}" filter="url(#softShadow)" />
          
          <!-- Emblem Icon Container -->
          <rect x="170" y="85" width="40" height="34" rx="10" fill="#ecfdf5" />
          <text x="190" y="108" text-anchor="middle" font-size="18">🛡️</text>

          <!-- Label Tag -->
          <text x="190" y="132" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="800" fill="#065f46">Sentinel</text>

          <!-- Status Indicator Pill -->
          <g transform="translate(145, 54)">
            <rect width="90" height="18" rx="9" fill="#065f46" />
            <text x="45" y="12.5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#ffffff">Windows x64</text>
          </g>
        </g>

        <!-- ================= NODE 2: SIMPANPASSWORD (Top-Right) ================= -->
        <g id="node-simpanpassword" class="interactive-node eco-node-b" data-product-id="simpanpassword" transform="translate(0, 0)">
          <!-- Ground Shadow -->
          <ellipse cx="610" cy="148" rx="45" ry="16" fill="#0f172a" opacity="0.07" />
          
          <!-- Active Highlight Aura -->
          ${activeProductId === 'simpanpassword' ? `
            <circle cx="610" cy="110" r="44" fill="#0284c7" opacity="0.18" filter="url(#glowLight)" />
            <circle cx="610" cy="110" r="36" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="3 3" />
          ` : ''}

          <!-- Floating Glass Node Card -->
          <rect x="565" y="75" width="90" height="70" rx="18" fill="#ffffff" stroke="${activeProductId === 'simpanpassword' ? '#0284c7' : '#e2e8f0'}" stroke-width="${activeProductId === 'simpanpassword' ? '2.5' : '1.5'}" filter="url(#softShadow)" />
          
          <!-- Emblem Icon Container -->
          <rect x="590" y="85" width="40" height="34" rx="10" fill="#f0f9ff" />
          <text x="610" y="108" text-anchor="middle" font-size="18">🔑</text>

          <!-- Label Tag -->
          <text x="610" y="132" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="800" fill="#0369a1">Password</text>

          <!-- Status Indicator Pill -->
          <g transform="translate(565, 54)">
            <rect width="90" height="18" rx="9" fill="#0284c7" />
            <text x="45" y="12.5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#ffffff">Zero-Knowledge</text>
          </g>
        </g>

        <!-- ================= NODE 3: HEALTH (Bottom-Left) ================= -->
        <g id="node-health" class="interactive-node eco-node-c" data-product-id="health" transform="translate(0, 0)">
          <!-- Ground Shadow -->
          <ellipse cx="190" cy="348" rx="45" ry="16" fill="#0f172a" opacity="0.07" />
          
          <!-- Active Highlight Aura -->
          ${activeProductId === 'health' ? `
            <circle cx="190" cy="310" r="44" fill="#4f46e5" opacity="0.18" filter="url(#glowLight)" />
            <circle cx="190" cy="310" r="36" fill="none" stroke="#4f46e5" stroke-width="2" stroke-dasharray="3 3" />
          ` : ''}

          <!-- Floating Glass Node Card -->
          <rect x="145" y="275" width="90" height="70" rx="18" fill="#ffffff" stroke="${activeProductId === 'health' ? '#4f46e5' : '#e2e8f0'}" stroke-width="${activeProductId === 'health' ? '2.5' : '1.5'}" filter="url(#softShadow)" />
          
          <!-- Emblem Icon Container -->
          <rect x="170" y="285" width="40" height="34" rx="10" fill="#eef2ff" />
          <text x="190" y="308" text-anchor="middle" font-size="18">🏥</text>

          <!-- Label Tag -->
          <text x="190" y="332" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="800" fill="#3730a3">RS Health</text>

          <!-- Status Indicator Pill -->
          <g transform="translate(145, 254)">
            <rect width="90" height="18" rx="9" fill="#4338ca" />
            <text x="45" y="12.5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#ffffff">HL7 / FHIR EMR</text>
          </g>
        </g>

        <!-- ================= NODE 4: AI ANALYTICS (Bottom-Right) ================= -->
        <g id="node-ai-analytics" class="interactive-node eco-node-d" data-product-id="ai-analytics" transform="translate(0, 0)">
          <!-- Ground Shadow -->
          <ellipse cx="610" cy="348" rx="45" ry="16" fill="#0f172a" opacity="0.07" />
          
          <!-- Active Highlight Aura -->
          ${activeProductId === 'ai-analytics' ? `
            <circle cx="610" cy="310" r="44" fill="#7c3aed" opacity="0.18" filter="url(#glowLight)" />
            <circle cx="610" cy="310" r="36" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="3 3" />
          ` : ''}

          <!-- Floating Glass Node Card -->
          <rect x="565" y="275" width="90" height="70" rx="18" fill="#ffffff" stroke="${activeProductId === 'ai-analytics' ? '#7c3aed' : '#e2e8f0'}" stroke-width="${activeProductId === 'ai-analytics' ? '2.5' : '1.5'}" filter="url(#softShadow)" />
          
          <!-- Emblem Icon Container -->
          <rect x="590" y="285" width="40" height="34" rx="10" fill="#faf5ff" />
          <text x="610" y="308" text-anchor="middle" font-size="18">✨</text>

          <!-- Label Tag -->
          <text x="610" y="332" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="800" fill="#581c87">AI Health</text>

          <!-- Status Indicator Pill -->
          <g transform="translate(565, 254)">
            <rect width="90" height="18" rx="9" fill="#6d28d9" />
            <text x="45" y="12.5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#ffffff">ML Inference</text>
          </g>
        </g>

        <!-- ================= NODE 5: BLINENOTE (Top-Center) ================= -->
        <g id="node-blinenote" class="interactive-node eco-node-b" data-product-id="blinenote" transform="translate(0, 0)">
          <!-- Ground Shadow -->
          <ellipse cx="400" cy="98" rx="42" ry="14" fill="#0f172a" opacity="0.07" />
          
          <!-- Active Highlight Aura -->
          ${activeProductId === 'blinenote' ? `
            <circle cx="400" cy="62" r="44" fill="#f59e0b" opacity="0.22" filter="url(#glowLight)" />
            <circle cx="400" cy="62" r="36" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3" />
          ` : ''}

          <!-- Floating Glass Node Card -->
          <rect x="355" y="30" width="90" height="65" rx="18" fill="#ffffff" stroke="${activeProductId === 'blinenote' ? '#f59e0b' : '#e2e8f0'}" stroke-width="${activeProductId === 'blinenote' ? '2.5' : '1.5'}" filter="url(#softShadow)" />
          
          <!-- Emblem Icon Container -->
          <rect x="380" y="38" width="40" height="30" rx="10" fill="#fffbeb" />
          <text x="400" y="58" text-anchor="middle" font-size="16">🎙️</text>

          <!-- Label Tag -->
          <text x="400" y="83" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#b45309">BLineNote</text>

          <!-- Status Indicator Pill -->
          <g transform="translate(355, 12)">
            <rect width="90" height="18" rx="9" fill="#d97706" />
            <text x="45" y="12.5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#ffffff">AI Voice · 2FA</text>
          </g>
        </g>

        <!-- ================= NODE 6: IT SUPPORT CENTER (Bottom-Center) ================= -->
        <g id="node-itsupport" class="interactive-node eco-node-c" data-product-id="itsupport" transform="translate(0, 0)">
          <!-- Ground Shadow -->
          <ellipse cx="400" cy="405" rx="42" ry="14" fill="#0f172a" opacity="0.07" />
          
          <!-- Active Highlight Aura -->
          ${activeProductId === 'itsupport' ? `
            <circle cx="400" cy="365" r="44" fill="#0f766e" opacity="0.22" filter="url(#glowLight)" />
            <circle cx="400" cy="365" r="36" fill="none" stroke="#0f766e" stroke-width="2" stroke-dasharray="3 3" />
          ` : ''}

          <!-- Floating Glass Node Card -->
          <rect x="355" y="335" width="90" height="65" rx="18" fill="#ffffff" stroke="${activeProductId === 'itsupport' ? '#0f766e' : '#e2e8f0'}" stroke-width="${activeProductId === 'itsupport' ? '2.5' : '1.5'}" filter="url(#softShadow)" />
          
          <!-- Emblem Icon Container -->
          <rect x="380" y="342" width="40" height="30" rx="10" fill="#f0fdfa" />
          <text x="400" y="362" text-anchor="middle" font-size="16">🛠️</text>

          <!-- Label Tag -->
          <text x="400" y="388" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#115e59">IT Support</text>

          <!-- Status Indicator Pill -->
          <g transform="translate(355, 316)">
            <rect width="90" height="18" rx="9" fill="#0f766e" />
            <text x="45" y="12.5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#ffffff">86 Field Tools</text>
          </g>
        </g>

      </svg>

      <!-- Subtitle Helper Note -->
      <div class="text-center mt-1">
        <p class="text-[11px] text-slate-400 font-semibold tracking-wide">
          💡 Klik node di atas untuk menjelajahi arsitektur dan kapabilitas masing-masing prototipe
        </p>
      </div>

    </div>
  `;
}
