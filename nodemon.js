// nodemon.js --- Nodemon configuration

{
    "verbose": false,
    "watch": [ "./server" ],
    "exec": "./node_modules/.bin/webpack --mode=development --config webpack.config.server.js && node ./dist/server.bundle.js"
}

// nodemon.js ends here
