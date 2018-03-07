const express = require('express')
const app = express()

const log = [];


app.get('/', (req, res) => {
    log.push(req.headers);
    res.send('Hello World!')
});

app.get('/log', (req, res) => {
    res.json(log)
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));