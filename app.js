const express = require("express");
const app = express();

app.get('/api/test2', (req, res) => {
    res.json({ text: "Hello World" });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
});