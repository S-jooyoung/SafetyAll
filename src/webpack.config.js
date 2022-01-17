const webpack = require("webpack");

module.exports = {
  plugin: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
