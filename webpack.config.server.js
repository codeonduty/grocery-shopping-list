// Webpack configuration for server

// Code:

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    name: 'server',
    mode: 'development',
    entry: path.resolve(__dirname, 'server/server.js'),
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "server.bundle.js",
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            }
        ]
    }
}

module.exports = config;

// webpack.config.server.js ends here
