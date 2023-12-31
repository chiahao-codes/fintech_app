const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: {
    home: path.resolve("C:/Desktop/Ticqer", "src/js/home.js"),
    ticker: {
      import: [
        path.resolve("C:/Desktop/Ticqer", "src/js/ticker.js"),
        path.resolve("C:/Desktop/Ticqer", "src/js/ticker2.js"),
      ],
    },
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
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      title: "Ticqer",
      filename: "ticker.html",
      template: "src/ticker_template.html",
      chunks: ["ticker"],
      scriptLoading: "defer",
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
  stats: {
    errorDetails: true,
  },

  externalsPresets: {
    node: true,
  },
  externalsType: "node-commonjs",
  externals: {
    "url":"url"
  },
  target: "node",

  //
  //
};

/**
 * 
 * new NodePolyfillPlugin(),
 *    
 *   externals: {
    "barchart-dot-com":"barchart-dot-com"
  }
 *    resolve: {
    fallback: {
      tls: false,
      net: false,
      http2: false,
      stream: false,
      https: false,
      http: false,
      fs: false,
      zlib: false,
      os: false,
      dns: false,
    },
  },
 *
 * 
 * 
 *  new PreloadWebpackPlugin({
      rel: "preload",
      as(entry) {
        if (/\.scss$/.test(entry)) return "style";
        if (/\.woff$/.test(entry)) return "font";
        if (/\.png$/.test(entry)) return "image";
        return "script";
      },
    }),
 */