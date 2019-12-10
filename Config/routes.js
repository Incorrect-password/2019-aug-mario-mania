const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

const addUserController = require('../Controllers/addUserController')
const addRaceResultsController = require('../Controllers/addRaceResultsController')

const routes = (app) => {

    app.post('/user', jsonParser, function(req, res) {
        addUserController(req.body)
        res.send('created user!')
    })

    app.post('/results', jsonParser, function (req, res) {
       addRaceResultsController(req.body)
        res.send('added results!')

    })
}

module.exports = routes
