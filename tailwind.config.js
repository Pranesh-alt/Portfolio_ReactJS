/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0070F3',
          600: '#005ac2',
          700: '#004391',
          800: '#002d61',
          900: '#001630',
        },
        secondary: {
          50: '#fff0f0',
          100: '#ffe1e1',
          200: '#ffc3c3',
          300: '#ffa5a5',
          400: '#ff8787',
          500: '#FF6B6B',
          600: '#cc5656',
          700: '#994040',
          800: '#662b2b',
          900: '#331515',
        },
        accent: {
          50: '#fffae6',
          100: '#fff5cc',
          200: '#ffeb99',
          300: '#ffe066',
          400: '#ffd633',
          500: '#FFD166',
          600: '#cca752',
          700: '#997d3d',
          800: '#665429',
          900: '#332a14',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#FBBF24',
        },
        error: {
          500: '#EF4444',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}