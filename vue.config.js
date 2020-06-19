const ExtractTextPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  devServer: {
    port: "8080",
  },
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");

    config.output.filename("[name].js");

    config.plugin("extract-css").use(ExtractTextPlugin, [
      {
        filename: "[name].css",
        allChunks: true,
      },
    ]);
  },
  configureWebpack: {
    output: {
      filename: "[name].js",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".js", ".vue", ".json"],
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
};
