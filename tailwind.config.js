/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jade: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // TRACE Primary
          600: '#059669', // TRACE Dark Jade
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        bg: {
          DEFAULT: '#080c0a', // TRACE Dark BG
          card: '#111915', // TRACE Card BG
        },
        fg: {
          DEFAULT: '#f0f5f2', // TRACE Foreground
          muted: '#8a9e94', // TRACE Muted Foreground
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 65%)',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
