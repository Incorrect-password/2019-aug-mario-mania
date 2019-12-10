const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const addUserController = require('../Controllers/addUserController')
const getTrackRankingsController = require('../Controllers/getTrackRankingsController')

const routes = (app) => {

    app.post('/user', jsonParser, function(req, res) {
        addUserController(req.body, res)
    })
    app.get('trackrankings', jsonParser,function (req,res) {
        getTrackRankingsController()
    })
}

module.exports = routes;
