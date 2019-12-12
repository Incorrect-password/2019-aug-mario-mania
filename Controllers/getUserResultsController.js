const getRacesTakenPartIn = require('../Services/tableRace').addResult


function getUserResultsController(userData, res) {
    //specific user
    //return races taken part in
     getRacesTakenPartIn()
    //return tracks and results
    //mode position across all tracks

}

module.exports = getUserResultsController