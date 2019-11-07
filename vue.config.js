module.exports = {
  devServer: {
    port: '8080',
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
