// Webpack configuration for client

// Code:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    name: 'browser',
    mode: 'development',
    entry: path.resolve(__dirname, 'client/src/client.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}

module.exports = config;

// webpack.config.client.js ends here
