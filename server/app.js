const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "hygeia",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/api/*", (req, res) => {
    res.send("hello");
})

app.post("/api/profile", (req, res) => {

    const name = req.body.name
    const role = req.body.role
    const quote = req.body.quote

    const sqlInsert = "INSERT INTO user_list (name, role, quote) VALUES (?,?,?);"
    database.query(sqlInsert,[name, role, quote] , (err, result) => {
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

    const sqlInsert = "INSERT INTO user_list (age, gender, language, experience_id, my_web, my_soc) VALUES (?,?,?,?,?,?);"
    database.query(sqlInsert,[age, gender, languages, experiences, website, social] , (err, result) => {
        console.log(result)
    });
    res.send(age, gender, languages, experiences, website, social)
});

app.listen(8080, () => {
    console.log("Running..")
})