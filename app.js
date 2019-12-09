
const express = require('express');

const bodyParser = require('body-parser');

const routes = require('./Config/routes');

const app = express();

const port = 3000;

var jsonParser = bodyParser.json();

//include the routes
routes(app)

app.listen(port, () => {
    console.log('server running')
})
