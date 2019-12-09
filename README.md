# 2019-aug-mario-mania

Local setup

Routes

    for local development use localhost:3000/ as your ajax URL

/user

POST

    Create new user.
    {"name":"Xx_Bowser_xX", "cohort":2, "favRacer":5}
        name is limited to 20 chars,
        cohort must be an integer ID for available cohorts,
        favRacer must be an integer ID for available racers,.

/results

POST

    Record race results.
    {"track":2, 
    "result":[{"user":1, "position":1},
              {"user":2, "position":3},
              {"user":3, "position":5},
              {"user":4, "position":12}
              ]}
              all inputted data should be the integer ID of the corresponding field.
/trackrankings

GET

    Get the user rankings for the track requested
    send track name with the key of "track"

