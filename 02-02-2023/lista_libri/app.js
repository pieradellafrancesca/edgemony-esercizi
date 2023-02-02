const http = require('http');
const url = require('url');
const fs = require('fs');
const books = require('./books');


let server = http.createServer((req, res) => {
    let page = url.parse(req.url).pathname;
    console.log(page);

    if (page === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let homePage = fs.readFileSync('index.html');
        res.end(homePage);
    } else if (page === '/api/books') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(books));
    } else if (page === '/chisono') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let chiSono = fs.readFileSync('chisono.html');
        res.end(chiSono);
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(8181);