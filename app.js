const addUser = require('./addUser')

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

var jsonParser = bodyParser.json();

app.get('/', function (request, response) {
    response.send('hello world');
})

app.post('/user', jsonParser, function(req, res) {
    addUser(req.body)
    res.send('created user!');
})

app.listen(port, () => {
    console.log('server running')
})
