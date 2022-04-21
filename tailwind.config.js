const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      primary: colors.cyan,
      secondary: colors.emerald,
      neutral: colors.stone,
      information: colors.blue,
      attention: colors.orange,
      success: colors.lime,
      destructive: colors.rose,
      error: colors.red,
      warning: colors.amber,
    },
    extend: {},
  },
  plugins: [],
}
