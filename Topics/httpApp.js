const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar/index.html');
const homeStyle = readFileSync('./navbar/style.css');
const homeImg = readFileSync('./navbar/logo.svg');
const homeLogic = readFileSync('./navbar/browser-app.js');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About page</h1>');
        res.end();
    }
    else if (req.url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyle);
        res.end();
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homeImg);
        res.end();
    }
    else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    }
    else{
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Not Found page</h1>');
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});  


