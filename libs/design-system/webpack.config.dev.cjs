module.exports = {
  extends: "./webpack.config.base.cjs",
  devServer: {
    port: 9000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  mode: "development",
};
