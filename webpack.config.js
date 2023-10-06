import path from 'path';

export default {
    mode: 'development',
    entry: path.resolve('C:/Desktop/Ticqer', 'public/src/js/app.js'),
    output: {
        path: path.resolve('C:/Desktop/Ticqer', 'dist'),
        filename: 'bundle.js'
    },
}