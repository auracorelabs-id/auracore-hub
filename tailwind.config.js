/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom AuraCore colors
        aura: {
          dark: '#0f172a',
          darker: '#000000',
        }
      },
      animation: {
        breathe: 'breathe 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-1': 'slideUp 0.6s ease-out 0.1s forwards',
        'slide-up-2': 'slideUp 0.6s ease-out 0.2s forwards',
        'slide-up-3': 'slideUp 0.6s ease-out 0.3s forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 25px rgba(79, 70, 229, 0.45))',
          },
          '50%': {
            transform: 'scale(1.05)',
            filter: 'drop-shadow(0 0 35px rgba(79, 70, 229, 0.75))',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
