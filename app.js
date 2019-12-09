require('addUser')

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

var jsonParser = bodyParser.json();

app.get('/', function (request, response) {
    response.send('hello world');
})

app.post('/user', jsonParser, function(req, res) {

    // write function for req.body to go into

    addUser(req.body)

    // DBConnection(function (db) {
    //     var collection = db.collection('Tasks');
    //     collection.insertOne(req.body);
    //     res.send('created task!');
    // });
});

app.listen(port, () => {
    console.log('server running')
})
