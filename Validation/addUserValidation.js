let getCohort = require('../Services/tableCohort')



async function addUserValidation(userData) {
    //change input JSON to object
    //check existence of name, cohort and favRacer
    //check that name is no longer than 20 char
    //check that cohort and favRacer are IDs and that they exist in their tables

    let validUserData = true

    let keys = Object.keys(userData);
    //
    getCohort(function (err, cohorts) {
        getFavRacer(function (err, favRacers) {


        })
        // get other data with callback
        // console.log('HERE')
        console.log(result)
    })

    let cohorts = await getCohort()


    // console.log(cohorts)

    // console.log(cohorts)

    if (!(keys[0] == "name" && keys[1] == "cohort" && keys[2] == "favRacer")){
        validUserData = false
    }

    if (userData.name.length < 0 && userData.name.length > 20){
        validUserData = false
    }

    if (typeof(userData.cohort) !== "number" ){
        validUserData = false
    }

    if (typeof(userData.favRacer) !== "number" ){
        validUserData = false
    }

    return validUserData


    // if (keys[0] == "name" && keys[1] == "cohort" && keys[2] == "favRacer"){
    //     if (userData.name.length < 0 && userData.name.length > 20){
    //         return console.log('Invalid Input. "name" length incorrect');
    //     }
    //
    //     console.log(typeof(userData.cohort))
    //
    //     if (typeof(userData.cohort) !== "number" ){
    //         //run db request in if statement
    //         // if (db result !== ok)
    //         return console.log('Invalid Input. Cohort not recognised');
    //
    //     } else {
    //         return console.log('Invalid Input. Cohort not recognised');
    //     }
    //
    //     if (typeof(userData.favRacer) !== "number"){
    //         //run db request in if statement
    //         // if (db result !== ok)
    //         return console.log('Invalid Input');
    //     } else {
    //         return console.log('Invalid Input');
    //     }
    //
    // } else {
    //     return console.log("Invalid Input. Please check documentation for required fields")
    // }
}

module.exports = addUserValidation


//     keys.forEach(function (item, index) {
//         if (index == "name" || index == "cohort" || index == "favRacer"){
//
//         }
//     })