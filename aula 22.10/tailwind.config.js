/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-claro' : '#0000dd',
        'azul-escuro' : '#000033',
        'rosa-fiap' : '#dc143c'
      },
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}

