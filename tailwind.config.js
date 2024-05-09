/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        backgroundImage:{
          "home": "url('/asset/fnd.png')"
        }
      },
  },
  plugins: [],
}

