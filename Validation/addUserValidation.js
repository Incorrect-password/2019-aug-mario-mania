let getCohort = require('../Services/tableCohort')
let getFavRacer = require('../Services/tableFavRacer')



function addUserValidation(userData, cb) {
    //check existence of name, cohort and favRacer
    //check that name is no longer than 20 char
    //check that cohort and favRacer are IDs and that they exist in their tables

     getCohort(function (err, cohorts) {
        getFavRacer(function (err, favRacers) {

            let validUserData = true

            let keys = Object.keys(userData);

            if (!(keys[0] == "name" && keys[1] == "cohort" && keys[2] == "favRacer")) {
                validUserData = false
            }

            if (userData.name.length < 0 || userData.name.length > 20) {
                validUserData = false
            }

            if (typeof (userData.cohort) !== "number") {
                validUserData = false
            }

            let cohortCheck = cohorts.find(({id}) => id === userData.cohort)

            if (cohortCheck === undefined) {
                validUserData = false
            }

            let favRacerCheck = favRacers.find(({id}) => id === userData.favRacer)

            if (favRacerCheck === undefined) {
                validUserData = false
            }

            if (typeof (userData.favRacer) !== "number") {
                validUserData = false
            }

            cb(validUserData)
        })
    })
}

module.exports = addUserValidation
