/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean Light Tech Design Tokens
        surface: {
          page: '#f8fafc',      // Slate 50
          card: '#ffffff',      // Pure White
          subtle: '#f1f5f9',    // Slate 100
          elevated: '#ffffff',
          dark: '#0f172a',      // Slate 900
        },
        content: {
          main: '#0f172a',      // Slate 900
          body: '#334155',      // Slate 700
          muted: '#64748b',     // Slate 500
          subtle: '#94a3b8',    // Slate 400
        },
        border: {
          light: '#e2e8f0',     // Slate 200
          subtle: '#f1f5f9',    // Slate 100
          focus: '#3b82f6',     // Blue 500
        },
        brand: {
          blue: '#2563eb',      // Blue 600 - Main Enterprise Blue
          cyan: '#0284c7',      // Sky 600 - Cloud Tech Accent
          indigo: '#4f46e5',    // Indigo 600 - Innovation Accent
          purple: '#7c3aed',    // Violet 600 - AI Labs Accent
          emerald: '#10b981',   // Emerald 500 - Active / Secure
          amber: '#f59e0b',     // Amber 500 - Prototype / Beta
        }
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(15, 23, 42, 0.04)',
        'soft-md': '0 4px 16px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -2px rgba(15, 23, 42, 0.03)',
        'soft-lg': '0 10px 25px -4px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.03)',
        'soft-xl': '0 20px 35px -6px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'soft-2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.08)',
        'pill': '0 4px 14px 0 rgba(37, 99, 235, 0.2)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-sky': '0 0 35px -5px rgba(2, 132, 199, 0.25)',
        'glow-indigo': '0 0 35px -5px rgba(79, 70, 229, 0.25)',
        'glow-purple': '0 0 35px -5px rgba(124, 58, 237, 0.25)',
      },
      animation: {
        'breathe-light': 'breatheLight 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        breatheLight: {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'drop-shadow(0 4px 12px rgba(37, 99, 235, 0.25))',
          },
          '50%': {
            transform: 'scale(1.03)',
            filter: 'drop-shadow(0 8px 24px rgba(37, 99, 235, 0.4))',
          },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
    },
  },
  plugins: [],
}
