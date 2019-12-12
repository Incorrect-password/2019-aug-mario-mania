const getRacesTracksResults = require('../Services/tableRace').addResult

/**
 * retrieves tracks and results and the combined mode based on user id
 *
 * @param userid
 * @param res
 */
function getUserResultsController(userid, res) {
    //specific user
    //return tracks and results
    //mode position across all tracks
    //return races taken part in
    getRacesTracksResults(userid, res)

}

module.exports = getUserResultsController