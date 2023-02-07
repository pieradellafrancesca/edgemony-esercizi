const express = require('express');
const app = express();
const users = require('./posts');
const PORT = 5000;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/api/posts', (req, res) => {
    res.status(200).json({success: true, data: users})
});

app.post('/api/posts', (req, res) => {
    const {userId, id, title, body } = req.body;
    if (!userId || !id || !title || ! body) {
        return res.status(400).json({success: false, msg: 'Data missing'})
    }
    res.status(200).json({success: true, post: {userId: userId, id: id, title: title, body: body}});
});


app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));