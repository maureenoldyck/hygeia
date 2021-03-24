const express = require('express');
const app = express();
const mysql = require('mysql');

const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "hygeia",
});

app.post("/profile/edit/insert", (req, res) => {
    const sqlInsert = "INSERT INTO user_list (name, role, quote) VALUES ('Basile', 'helper', 'I love Pizza!');"
    database.query(sqlInsert, (err, result) => {
        res.send("Hi John!")
    });
});

app.listen(3000, () => {
    console.log("Running..")
})