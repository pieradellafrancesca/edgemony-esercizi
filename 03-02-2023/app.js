const express = require('express');

const app = express();
const PORT = 8181;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/learn', (req, res) => {
    res.sendFile(__dirname + '/public/learn.html')
})

app.get('/social', (req, res) => {
    res.sendFile(__dirname + '/public/social.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(PORT, () => {
    console.log(`Server active on ${PORT}`)
});