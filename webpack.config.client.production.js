// Webpack configuration for client in production

// Code:

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    name: 'browser',
    mode: "production",
    entry: path.resolve(__dirname, 'client/src/client.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client-[contenthash].bundle.js',
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
                    'html-loader'
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/public/index.html',
            favicon: 'client/public/favicon.ico'
        }),
        new CleanWebpackPlugin()
    ]
}

module.exports = config;

// webpack.config.client.production.js ends here
