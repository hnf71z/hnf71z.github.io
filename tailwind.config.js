/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '13px'
  },

    extend: {
      colors: {
        primary: '#075985',
        blue: '#1e3a8a',
        secondary: '#64748b',
      }
    },
  },
  plugins: [],
}

