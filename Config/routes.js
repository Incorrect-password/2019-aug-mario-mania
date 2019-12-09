const addUserController = require('Controllers/addUserController')

const routes = (app) => {
    app.get('/', function (request, response) {
        response.send('hello world');
    })

    app.post('/user', jsonParser, function(req, res) {
        addUserController(req.body)
        res.send('created user!');
    })
}

module.exports = routes;