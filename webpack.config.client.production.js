// webpack.config.client.production.js --- Webpack client build configuration

// Code:

const path = require('path');
const webpack = require('webpack');

const CURRENT_WORKING_DIR = process.cwd();

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/src/client.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'client.bundle.js',
        publicPath: "/dist/"
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
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }
}

module.exports = config;

// webpack.config.client.production.js
