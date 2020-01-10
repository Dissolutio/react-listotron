var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Listotron.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Listotron.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}