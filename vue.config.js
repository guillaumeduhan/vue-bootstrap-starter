module.exports = {
  devServer: {
    port: '8080',
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
    },
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/style.scss";
        `,
      },
    },
  },
}
