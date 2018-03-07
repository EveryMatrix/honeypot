const express = require('express');
const app = express();

const PORT = 80;
const log = [];
const logSize = 50;

app.get('/log', (req, res) => {
    res.json(log);
});

app.get('/google0fba1d58ca9ecd9a.html', (req, res) => {
    res.send('google-site-verification: google0fba1d58ca9ecd9a.html');
});

app.get('/', (req, res) => {
    log.push(req.headers);
    if(log.length > logSize){
        log.shift();
    }

    res.send('Hello World!')
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));