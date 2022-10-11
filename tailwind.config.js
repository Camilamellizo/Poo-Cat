/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'paisaje': "url('./fondo.png')",
      }      
    },
  },
  plugins: [],
}
