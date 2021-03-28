const express = require('express');
const session = require('express-session');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const { reset } = require('nodemon');


//==========================================================================================//
//                                  Create connection + config                              //
//==========================================================================================//

//TODO: Need to find a way to change this hard coding into a variable

// Instead of using the const "database", "pool" will be the one 
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'hygeia',
    port            : 3306,
    insecureAuth    : true,
});

app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



app.use(session({
    name: 'user',
    secret: 'keyboard cat',
    resave: false, 
    path: '/',
    saveUninitialized: false, 
    cookie: { maxAge: 48*60*60*1000, secure: false}
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
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

app.get("/api/dev/test", (req, res) => {
    res.send("stuff");
    const sqlInsert = "INSERT INTO users_list (`u_email`, `u_password`, `u_id`) VALUE ('test@email.com', 'password', '22');"
    pool.query(sqlInsert , (err, result) => {
        console.log(err)
    });
})

app.post("/api/profile", (req, res) => {

    const name = req.body.name
    const role = req.body.role
    const quote = req.body.quote

    const sqlInsert = "INSERT INTO users_list (`name`, `role`, `quote`) VALUES (?,?,?);"

    pool.query(sqlInsert, [name, role, quote] , (err, result) => {
        console.log(err)
    });
});



app.post("/api/details", (req, res) => {

    const age = req.body.age
    const gender = req.body.gender
    const languages = req.body.languages
    const experiences = req.body.experiences
    const website = req.body.website
    const social = req.body.social

    const sqlInsert = "INSERT INTO users_list (`age`, `gender`, `language`, `experience_id`, `my_web`, `my_soc`) VALUES (?,?,?,?,?,?);"

    pool.query(sqlInsert, [age, gender, languages, experiences, website, social] , (err, result) => {
        console.log(result)
    });
});




// // // LOGIN GET REQUEST

app.get('/api/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else { 
        res.send({loggedIn: false});
    }
});



// USER LOGIN POST REQUEST 

app.post("/api/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sqlInsert = "SELECT * FROM users_list WHERE u_email = ? AND u_password = ?";

    pool.query(sqlInsert, [email, password], (err, result) => {
        if (err) {
            res.send({err: err});
        } 
        
        if (result.length > 0) {
            req.session.user = result;
            res.send(result);
        } else {
            res.send({ err: "Sadly, your email and/or password doesn't seem correct. Please try again."});
        }
    });
});



// ROUTE FOR PROFILE 

app.get("/api/profile", (req, res,) => {

    //TODO: redirect to home when user is not logged in 

    console.log(localStorage.getItem('userID'));



});


//==========================================================================================//
//                                      API Listener                                        //
//==========================================================================================//


app.listen(5000, () => {
    console.log("Running..")
})