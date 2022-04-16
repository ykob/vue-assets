const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: colors.cyan,
      danger: colors.red,
    },
    extend: {},
  },
  plugins: [],
}
