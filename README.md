# 2019-aug-mario-mania

Local setup

Routes

    for local development use localhost:3000/ as your ajax URL

/user

POST

    Create new user.
    {"name":"Xx_Bowser_xX", "cohort":"2", "favRacer":"5"}
        name is limited to 20 chars and must be unique,
        cohort must be an integer ID for available cohorts,
        favRacer must be an integer ID for available racers,.

/results

POST

    Record race results.
    {"track":"2", 
    "result":[{"user":"1", "Position":"1"},
              {"user":"2", "Position":"3"},
              {"user":"3", "Position":"5"},
              {"user":"4", "Position":"12"}
              ]}
              all inputted data should be the integer ID of the corresponding field.
/trackrankings

GET

    Get the user rankings for the track requested
    send track name with the key of "track"

