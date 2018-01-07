const express    = require('express'),
      bodyParser = require('body-parser'),
      commander  = require('./commander'),
      app        = express(),
      router     = express.Router();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

router.post('/payload', (req, res) => {
    var data = req.body.data;
    commander.command(data);
    res.sendStatus(204);
});

app.use('/api', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
