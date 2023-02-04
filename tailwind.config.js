/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#A855F7',
        secondary: '##581C87',
        dark   : '#0f172a',
          
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

// Aktifkan Tailwind di terminal (npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch)