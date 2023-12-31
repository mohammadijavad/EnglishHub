/** @type {import('tailwindcss').Config} */
module.exports = {
  fontFamily: {
    body: ['Vazir'],
    display: ['Vazir'],
  },

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        BrightPurple: '#e60af3',
      },
    },
  },
  plugins: [],
}

