const express = require("express");
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/test', (req, res) => {
    console.log(req.query);
    res.json({
        text: "Hello world"
    });
});

app.get('/api/test/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ param: req.params.id });
});

app.post('/api/formular', (req, res) => {
    res.json({
        besked: "data blev modtaget",
        fornavn: req.body.fornavn,
        efternavn: req.body.efternavn
    });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});