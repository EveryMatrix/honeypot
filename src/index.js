const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 8080;
const log = [];
const logSize = 50;

app.get('/log', (req, res) => {
    res.json(log);
});

app.get('/google0fba1d58ca9ecd9a.html', (req, res) => {
    res.send('google-site-verification: google0fba1d58ca9ecd9a.html');
});

function addLog(newLine) {
    log.push(newLine);
    if (log.length > logSize) {
        log.shift();
    }
}

app.get('/', (req, res) => {
    addLog(req.headers);
    res.json({ok: true})
});

app.post('/add-log', bodyParser.json(), (req, res) => {
    addLog({
        headers: req.headers,
        ts2Response: req.body,
    });
    res.json({ok: true})
});

app.use(express.static('./src/public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));