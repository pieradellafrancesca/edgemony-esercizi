const express = require('express');
const authorize = require('./auth');
const {books} = require('./books');

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

// http://localhost:8080/api/v1/query?user=Francesca&search=U
app.get('/api/v1/query', authorize, (req, res) => {
    const{search} = req.query;
    let filterBook = [...books];

    if (search) {
        filterBook = filterBook.filter((book) => {
            return book.country.startsWith(search);
        })
    }
    res.status(200).json(filterBook);
})

app.listen(PORT, () => {
    console.log(`Server attivo sulla porta ${PORT}`);
});