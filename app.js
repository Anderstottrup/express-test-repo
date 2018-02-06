const express = require("express");
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes.js')(app);

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});