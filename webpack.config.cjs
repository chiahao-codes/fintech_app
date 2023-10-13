const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    home: path.resolve("C:/Desktop/Ticqer", "src/js/app.js"),
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
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  /**
     *  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "querystring": require.resolve("querystring-es3"),
      "crypto":require.resolve("crypto-browserify")
      }
  },
     */

  stats: {
    errorDetails: true,
  },
  externalsPresets: {
    node: true,
  },
};

/**
 * 
 */