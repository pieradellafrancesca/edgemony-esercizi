const http = require('http');
const os = require('os');

let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();

const fs = require('fs');

const products = fs.readFileSync('index.html');
const clients = fs.readFileSync('clients.html');

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
<header>
<a href="./products">Products</a>
<a href="./clients">Clients</a>
</header>
<br>
L'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;


const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.end(messaggio)

    else if (req.url === '/products')
        res.end(products)

    else if (req.url === '/clients')
    res.end(clients)

    else {
        res.writeHead(404);
        res.end('PAGE NOT FOUND');
    }
});

server.listen(3001)
console.log(messaggio)