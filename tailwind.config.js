/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'hero-font': 'Sriracha'
    },
    borderColor:{
      'primary': 'rgb(171, 81, 227)',
      'secondary': 'rgb(89, 5, 125)',
    }

  },
  plugins: [],
}

