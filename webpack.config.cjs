const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve('C:/Desktop/Ticqer', 'public/src/js/app.js'),
    output: {
        path: path.resolve('C:/Desktop/Ticqer', 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ticqer',
            esm: true,
            filename: 'index.html',
            template:'public/src/template.html'
        })
    ]
}