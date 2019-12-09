function addUserValidation(userInput) {
    //change input JSON to object
    //check existence of name, cohort and favRacer
    //check that name is no longer than 20 char
    //check that cohort and favRacer are IDs and that they exist in their tables
    let user = userInput.parse();
    let keys = Object.keys(user);
    if (keys[0] == "name" && keys[1] == "cohort" && keys[2] == "favRacer"){
        if (user.name.length < 0 && user.name.length > 20){
            return console.log('Invalid Input. "name" length incorrect');
        }

        if (typeof(user.cohort) !== "number" ){
            //run db request in if statement
            if (db result !== ok)
            return console.log('Invalid Input. Cohort not recognised');

        } else {
            return console.log('Invalid Input. Cohort not recognised');
        }

        if (typeof(user.favRacer) !== "number"){
            //run db request in if statement
            if (db result !== ok)
            return console.log('Invalid Input');
        } else {
            return console.log('Invalid Input');
        }

    }else {
        return console.log("Invalid Input. Please check documentation for required fields")
    }



}


//     keys.forEach(function (item, index) {
//         if (index == "name" || index == "cohort" || index == "favRacer"){
//
//         }
//     })