const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

const addUserController = require('../Controllers/addUserController')

const routes = (app) => {

    app.post('/user', jsonParser, function(req, res) {
        addUserController(req.body, res)
        // res.send('created user!');
    })
}

module.exports = routes;