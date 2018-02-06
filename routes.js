module.exports = (app) => {
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

}