/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#10B981', // Changed to Emerald Green
          blueLight: '#34D399',
          navy: '#0B1B3E',
          navyLight: '#0F245A',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(15, 36, 90, 0.08)',
        cardHover: '0 10px 32px rgba(15, 36, 90, 0.14)',
      },
    },
  },
  plugins: [],
};
