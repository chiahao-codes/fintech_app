const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve("C:/Desktop/Ticqer", "src/js/app.js"),
  },
  output: {
    path: path.resolve("C:/Desktop/Ticqer", "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Ticqer",
      esm: true,
      filename: "homepage.html",
        template: "src/home_template.html",
      chunks:['home']
    }),
  ],
};