const http = require('http');
const os = require('os');

let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();

const PORT = 3001;

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
<header>
<a href="./articoli">Articoli</a><br>
<a href="./commenti">Commenti</a><br>
<a href="./utenti">Utenti</a><br>
</header>
<br>
<div>
L'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</div>
</body>
</html>`;

let articoli = `<!doctype html>
<html>
<head>
</head>
<body>
<header>
<a href="./">Home</a><br>
<a href="./commenti">Commenti</a><br>
<a href="./utenti">Utenti</a><br>
</header>
<br>
<div>
<b>Questa è la sezione Articoli</b>
</div>
</body>
</html>`;

let commenti = `<!doctype html>
<html>
<head>
</head>
<body>
<header>
<a href="./">Home</a><br>
<a href="./articoli">Articoli</a><br>
<a href="./utenti">Utenti</a><br>
</header>
<br>
<div>
<b>Qui puoi scrivere i tuoi commenti</b>
</div>
</body>
</html>`;

let utenti = `<!doctype html>
<html>
<head>
</head>
<body>
<header>
<a href="./">Home</a><br>
<a href="./articoli">Articoli</a><br>
<a href="./commenti">Commenti</a><br>
</header>
<br>
<div>
<b>Questa è la sezione Utenti</b>
</div>
</body>
</html>`;


let server = http.createServer((req, res) => {

    if (req.url === '/')
        res.end(messaggio)

    else if (req.url === '/articoli')
        res.end(articoli)

    else if (req.url === '/commenti')
        res.end(commenti)

    else if (req.url === '/utenti')
    res.end(utenti)

    else {
        res.writeHead(404);
        res.end('PAGE NOT FOUND');
    }
});

server.listen(PORT)
console.log(`Server connesso alla porta ${PORT}`);