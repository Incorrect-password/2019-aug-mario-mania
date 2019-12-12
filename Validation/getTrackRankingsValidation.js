let getTrackids = require('../Services/tableTrack')


/**
 * checks that the user provided track id corresponds to one in the db
 *
 * @param trackid
 * @param res
 * @param callback
 */
function getTrackRankingValidation(trackid,res, callback) {
        getTrackids(function (err, trackid) {
            let validUserData = true

            let trackCheck = trackid.find(({id}) => id === trackid)

            if (trackCheck === undefined) {
                validUserData = false
            }
            callback(validUserData)
    })
}

module.exports.getTrackRankingValidation = getTrackRankingValidation