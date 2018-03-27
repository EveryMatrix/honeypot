const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 8080;
let log = [];
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

app.get('/clean', (req, res) => {
    log = [];
    res.json({ok: true, cleaned: true});
});

app.get('/demo', (req, res) => {
    res.json({message: 'works ok'});
});

app.post('/add-log', bodyParser.json(), (req, res) => {
    const q = {
        headers: req.headers,
        ts2Response: req.body,
    };
    addLog(q);
    //
    // res.header('Content-type', 'application/json');
    // res.header('Charset', 'utf8');
    res.json({ok: true});
});

app.use(express.static('./src/public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));