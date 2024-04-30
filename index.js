const express = require('express');

const app = express();
const PORT = 1337;

app.get('/', (req, res) => {
    res.send('q');
});

app.post('/fork', (req, res) => {
    try {
        res.send('--forked success');
    } catch (error) {
        res.status(500).send('--error: ' + error.message);
    }
});

app.post('/pull-request', (req, res) => {
    try {
        res.send('--created success');
    } catch (error) {
        res.status(500).send('--error create: ' + error.message);
    }
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = server;