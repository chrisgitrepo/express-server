const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
    console.log("GET From SERVER");
    res.send('GOT STUFF');
});

const port = 3000

app.listen(port, () => console.log(`Listening on port ${3000}`))