let getTrackids = require('../Services/tableResult')
let getUserids = require('../Services/tableResult')

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

            if (!(keys[0] == "track" && keys[1] == "result" && keys[1][0] == "user" && keys[1][1] == "position")) {
                validUserData = false
            }

            let trackCheck = trackid.find(({id}) => id === userData.track)

            if (trackCheck === undefined) {
                validUserData = false
            }
            let positions = []
            userData.result.forEach(function(value) {
                let userCheck = user.id.find(({id}) => id === value.user)
                if (userCheck === undefined) {
                    validUserData = false
                }
                positions.push(value.position)
            })

            if (positions[0] === )
                //check value of positions do not match
            })
            
//             if (typeof (userData.cohort) !== "number") {
//                 validUserData = false
//             }
//
//             let cohortCheck = cohorts.find(({id}) => id === userData.cohort)
//
//             if (cohortCheck === undefined) {
//                 validUserData = false
//             }
//
//             let favRacerCheck = favRacers.find(({id}) => id === userData.favRacer)
//
//             if (favRacerCheck === undefined) {
//                 validUserData = false
//             }
//
//             if (typeof (userData.favRacer) !== "number") {
//                 validUserData = false
//             }
//
            cb(validUserData)
        })
    })
}

module.exports = addRaceResultValidation
