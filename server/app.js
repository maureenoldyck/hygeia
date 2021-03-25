const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


//==========================================================================================//
//                                  Create connection + config                              //
//==========================================================================================//

//TODO: Need to find a way to change this hard coding into a variable

// Instead of using the const "database", "pool" will be the one 
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
<<<<<<< HEAD
    password        : '',
    database        : 'hygeia'
=======
    password        : 'root',
    database        : 'hygeia',
    port: 3306,
    insecureAuth: true,
>>>>>>> 5638b1e5c32c93be5c82044317b5893619bc7cec
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:3001");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


//==========================================================================================//
//                                 Create queries + req, res                                //
//==========================================================================================//


// Problem (FIXED): use backticks when naming the tabel collumns!

// when you want a new app.post(), use "api/<your component>"

app.post("/api/dev/test", (req, res) => {
    res.send("stuff");
    const sqlInsert = "INSERT INTO test (`name`) VALUE ('test');"
})

app.post("/api/profile", (req, res) => {

    const name = req.body.name
    const role = req.body.role
    const quote = req.body.quote

    const sqlInsert = "INSERT INTO user_list (`name`, `role`, `quote`) VALUES (?,?,?);"

    pool.query(sqlInsert, [name, role, quote] , (err, result) => {
        console.log(result)
    });
});

app.post("/api/details", (req, res) => {

    const age = req.body.age
    const gender = req.body.gender
    const languages = req.body.languages
    const experiences = req.body.experiences
    const website = req.body.website
    const social = req.body.social

    const sqlInsert = "INSERT INTO user_list (`age`, `gender`, `language`, `experience_id`, `my_web`, `my_soc`) VALUES (?,?,?,?,?,?);"

    pool.query(sqlInsert, [age, gender, languages, experiences, website, social] , (err, result) => {
        console.log(result)
    });
});


//==========================================================================================//
//                                      API Listener                                        //
//==========================================================================================//


app.listen(3000, () => {
    console.log("Running..")
})