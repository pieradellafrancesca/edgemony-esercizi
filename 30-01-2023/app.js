const http = require('http'); 

const server = http.createServer((req, res) => {

    if(req.url === '/')
        res.end('Welcome to our HomePage!')

    else if(req.url === '/studenti')
        res.end('Registrations open')

    else if(req.url === '/corsi')
        res.end('Advanced training courses')
    
    else {
        res.writeHead(404)
        res.end('PAGE NOT FOUND')
    }
});

//80 / 8000 /8080 /3000 / 3001 / 5000 / 5001 / 5010 / 3010
server.listen(3000);