const { defineConfig } = require('@vue/cli-service')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['**/*.{vue,css,scss}'],
      }),
    ],
  },
  transpileDependencies: true,
})
