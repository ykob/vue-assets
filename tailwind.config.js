const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      primary: colors.cyan,
      secondary: colors.violet,
      neutral: colors.stone,
      info: colors.blue,
      accent: colors.orange,
      success: colors.lime,
      danger: colors.red,
      warning: colors.amber,
    },
    extend: {},
  },
  plugins: [],
}
