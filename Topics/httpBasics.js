const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Home page</h1>');
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About page</h1>');
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