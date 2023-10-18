const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    home: path.resolve("C:/Desktop/Ticqer", "src/js/home.js"),
    ticker: path.resolve("C:/Desktop/Ticqer", "src/js/ticker.js"),
  },
  output: {
    path: path.resolve("C:/Desktop/Ticqer", "dist"),
    assetModuleFilename: "[name][ext]",
    filename: "[name][contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ticqer",
      filename: "homepage.html",
      template: "src/home_template.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      title: "Ticqer",
      filename: "ticker.html",
      template: "src/ticker_template.html",
      chunks:["ticker"]
    }),
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
  externalsPresets: {
    node: true,
  },
};
