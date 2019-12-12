let getTrackids = require('../Services/tableTrack')


/**
 * checks that the user provided track id corresponds to one in the db
 *
 * @param trackid
 * @param res
 * @param callback
 */
function getTrackRankingsValidation(userdata,res, callback) {
        getTrackids(function (err, trackid) {
            let validUserData = true

            let trackCheck = trackid.find(({id}) => id === parseInt(userdata))

            if (trackCheck === undefined) {
                validUserData = false
            }
            callback(validUserData)
    })
}

module.exports.getTrackRankingsValidation = getTrackRankingsValidation