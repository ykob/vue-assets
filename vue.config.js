const { defineConfig } = require('@vue/cli-service')
const StylelintPlugin = require('stylelint-webpack-plugin')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['**/*.{vue,html,css,scss}'],
      }),
    ],
  },
  transpileDependencies: true,
})
