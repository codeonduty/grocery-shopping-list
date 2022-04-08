// index.js --- Application front-end entry point

// Code:

const root = () => {
    return `<!doctype html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <title>Grocery Shopping List</title>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    </head>
                    <body>
                        <div id="root"></div>
                        <script type="text/javascript" src="/dist/client.bundle.js"></script>
                    </body>
                </html>`
}

module.exports = root;

// index.js ends here
