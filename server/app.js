const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'hygeia'
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

app.get("/api/profile", (req, res) => {
    res.send("hello");
})
app.get("/api/dev/test", (req, res) => {
    res.send("hello");
})

app.post("/api/dev/test", (req, res) => {
    res.send("stuff");
    const sqlInsert = "INSERT INTO test (`name`) VALUE ('test');"
    // pool.getConnection(function(err, connection) {
    //     if (err) throw err; // not connected!
    
    //     // Use the connection
    //     connection.query(sqlInsert , (err, result) => {
    //         console.log(err);
    //         console.log(__dirname)

    //         connection.release();

    //         if (error) throw error;
    //     });
        
    // });
})

app.post("/api/profile", (req, res) => {

    const name = req.body.name
    const role = req.body.role
    const quote = req.body.quote

    const sqlInsert = "INSERT INTO user_list (`name`, `role`, `quote`) VALUES (?,?,?);"
    pool.query(sqlInsert, [name, role, quote] , (err, result) => {
        console.log(result)
    });
    console.log(name);
    console.log(role);
    console.log(quote);

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
    console.log(age);
    console.log(gender);
    console.log(languages);
    console.log(experiences);
    console.log(website);
    console.log(social);

});

app.listen(3000, () => {
    console.log("Running..")
})