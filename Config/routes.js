const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

const addUserController = require('../Controllers/addUserController')
const addRaceResultsController = require('../Controllers/addRaceResultsController')

const routes = (app) => {

    app.post('/user', jsonParser, function(req, res) {

        addUserController(req.body)
        res.send('created user!')
    })

    app.post('/results', jsonParser, function(req, res) {
       addRaceResultsController(req.body, res)
        res.send('results added')
    })

    app.get('/userResults/:userid', jsonParser, function(req, res) {
        getUserResults(req.body, res)
    })
}

module.exports = routes
