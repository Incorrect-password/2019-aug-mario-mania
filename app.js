const express = require('express');

const app = express();

const port = 3000; // specify the place on your computer where you want to run it

app.get('/', function (request, response) {
    response.send('hello world');
})

app.listen(port, () => {
    console.log('server running')
})
