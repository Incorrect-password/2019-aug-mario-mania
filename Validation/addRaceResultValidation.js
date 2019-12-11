let getTrackids = require('../Services/tableTrack')
let getUserids = require('../Services/tableUser').getUserids

/**
 * checks the userData matches criteria and that the ids given exist in db
 *
 * @param userData
 * @param cb returns result
 */
function addRaceResultValidation(userData, cb) {
    getTrackids(function (err, trackid) {
        getUserids(function (err, userid) {
            let validUserData = true
            let keys = Object.keys(userData);
            console.log(validUserData)
            if (keys[0] != "track" || keys[1] != "result") {
                validUserData = false
                return cb(validUserData)
            }
            console.log(userData.result)
            let trackCheck = trackid.find(({id}) => id === userData.track)

            if (trackCheck === undefined) {
                validUserData = false
            }
            console.log(validUserData)

            let positions = []
            userData.result.forEach(function(value, key) {
                if (key == 'user') {
                    let userCheck = userid.find(({id}) => id === value.user)
                    if (userCheck === undefined) {
                        validUserData = false
                    }
                    positions.push(value.position)
                }else {
                    validUserData = false
                    return cb(validUserData)
                }
            })

            let uniquePositions = [...new Set(positions)]

            if(positions.length != uniquePositions.length) {
                validUserData = false
            }

            positions.forEach(function(position) {
                if (position > 12 || position < 0) {
                    validUserData = false
                }
            })
            console.log(validUserData)

            cb(validUserData)
        })
    })
}


module.exports = addRaceResultValidation
