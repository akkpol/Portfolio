const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      fs: "memfs",
    }),
  ],
};
