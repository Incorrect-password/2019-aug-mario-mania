const bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
const addUserController = require('../Controllers/addUserController')
const addRaceResultsController = require('../Controllers/addRaceResultsController')
const getTrackRankingsController = require('../Controllers/getTrackRankingsController')


const routes = (app) => {

    app.post('/user', jsonParser, function(req, res) {
        addUserController(req.body, res)
    })

    app.post('/results', jsonParser, function (req, res) {
        addRaceResultsController(req.body)
        res.send('added results!')
    })

    // app.get('/trackrankings', jsonParser,function (req, res) {
    //     getTrackRankingsController(req.query.trackid, res)
    //     res.send('hello')
    // })

    app.get('/trackrankings/:trackid', function (req, res) {
        getTrackRankingsController(req.params.trackid, res)
    })
}

module.exports = routes;
