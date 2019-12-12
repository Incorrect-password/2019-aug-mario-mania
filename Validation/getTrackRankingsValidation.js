let getTrackids = require('../Services/tableTrack')

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