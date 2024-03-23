/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}