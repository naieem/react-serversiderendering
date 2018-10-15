import express from 'express';
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
const PORT = process.env.PORT || 4000;
const app = express();
import { StaticRouter } from "react-router-dom";
import App from '../src/App';
app.use(express.static('./bundle'));
app.get('/*', (req, res) => {
    const context={};
    const jsx=(
        <StaticRouter context={ context } location={ req.url }>
            <App />
        </StaticRouter>
    );
    const reactDom = renderToString( jsx );
    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom) );
});
app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
        </body>
        </html>
    `;
}