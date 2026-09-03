/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D9232D',
          darkRed: '#B91C1C',
          lightRed: '#FFF1F2',
          black: '#0F172A',
          dark: '#111827',
          cardDark: '#1E293B',
          greyBg: '#F8FAFC',
          green: '#25D366',
          darkGreen: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.18)',
      }
    },
  },
  plugins: [],
}
