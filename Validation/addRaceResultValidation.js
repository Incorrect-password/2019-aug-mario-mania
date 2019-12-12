let getTrackids = require('../Services/tableTrack')
let getUserids = require('../Services/tableUser').getUserids

/**
 * checks the userData matches criteria and that the ids given exist in db
 *
 * @param userData
 * @param cb returns result
 */
function addRaceResultValidation(userData,newestRaceid, cb) {
    getTrackids(function (err, trackid) {
        getUserids(function (err, userid) {
            let validUserData = true
            let keys = Object.keys(userData);
            if (keys[0] != "track" || keys[1] != "result") {
                validUserData = false
                return cb(validUserData)
            }

            let trackCheck = trackid.find(({id}) => id === userData.track)

            if (trackCheck === undefined) {
                validUserData = false
            }

            let positions = []

            userData.result.forEach(function(value) {

                valueKeys = Object.keys(value)

                if (valueKeys[0] == 'user' && valueKeys[1] == 'position') {
                    let userCheck = userid.find(({id}) => id === value.user)
                    if (userCheck === undefined) {
                        validUserData = false
                    }
                    positions.push(value.position)
                }else{
                    validUserData = false
                    return cb(validUserData)
                }
            })

            let uniquePositions = [...new Set(positions)]

            if(positions.length != uniquePositions.length) {
                validUserData = false
            }

            positions.forEach(function(position) {
                if (position > 12 || position < 1) {
                    validUserData = false
                }
            })

            cb(validUserData)
        })
    })
}


module.exports = addRaceResultValidation
