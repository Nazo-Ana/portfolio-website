/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f8fbff',
          100: '#edf4ff',
          200: '#d9e6f7',
          300: '#aebfd6',
          400: '#72809a',
          500: '#4a5369',
          600: '#30384d',
          700: '#1c2436',
          800: '#101827',
          900: '#070b13',
          950: '#03050a',
        },
        aurora: {
          blue: '#4f8cff',
          violet: '#8b5cf6',
          cyan: '#22d3ee',
          pink: '#f472b6',
          green: '#34d399',
          amber: '#fbbf24',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(79, 140, 255, 0.24)',
        'glow-violet': '0 0 80px rgba(139, 92, 246, 0.24)',
        premium: '0 28px 90px rgba(3, 5, 10, 0.22)',
      },
      backgroundImage: {
        'premium-grid':
          'linear-gradient(rgba(148, 163, 184, 0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.11) 1px, transparent 1px)',
        'accent-gradient': 'linear-gradient(135deg, #4f8cff 0%, #8b5cf6 48%, #22d3ee 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
