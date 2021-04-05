const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const { reset } = require('nodemon');
//const bcrypt = require("bcryptjs");

const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");},
    filename: function(req, file, cb){
        const ext = file.mimetype.split("/")[1];
        cb(null, `uploads/${file.fieldname}-${Date.now()}.${ext}`);
    }
});

const upload = multer({
    // destination: 'client/public/uploads/',
    storage: storage,
    limits : {fileSize : 1000000}
    // fileFilter: function(req, file, cb){
    //   checkFileType(file, cb);
    // }
})

app.use('/', express.static(path.join(__dirname, '/public')));

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

app.post("/api/register", (req, res) => {
    //res.send("");
    //const bcrypt = require("bcryptjs");
    const u_email = req.body.email;
    const u_password = req.body.password;
    // const password = u_password;
    // const saltRounds = 10

    const sqlQuestion = "SELECT * FROM users_list;"
    const sqlInsert = "INSERT INTO users_list (`u_email`, `u_password`) VALUE (?, ?);"

    pool.query(sqlInsert, [u_email, u_password], (err, result) => {
        console.log(err);
        console.log(result);
    });

    // bcrypt.genSalt(saltRounds, function (err, salt) {
    //     if (err) {
    //         throw err
    //     } else {
    //         bcrypt.hash(password, salt, function(err, hash) {
    //         if (err) {
    //             throw err
    //         } else {
    //             console.log(hash)
    //         }
    //         })
    //     }
    //     });
})

app.post("/api/details/:id", (req, res) => {

    const age = req.body.age
    const gender = req.body.gender
    const languages = req.body.languages
    const experiences = req.body.experiences
    const website = req.body.website
    const social = req.body.social
    const id = req.params.id


    const sqlInsert = "UPDATE users_list SET `age` = ?, `gender` = ?, `language` = ?, `experience_id` = ?, `my_web` = ?, `my_soc` = ? WHERE id = ?;"

    pool.query(sqlInsert, [age, gender, languages, experiences, website, social, id] , (err, result) => {
        console.log(result)
    });
});


app.post("/api/settings/:id", (req, res) => {

    const anonymous = req.body.anonymous
    const profileVisibility = req.body.profileVisibility
    const openToConnect = req.body.openToConnect
    const dmAvailability = req.body.dmAvailability
    const notifications = req.body.notifications
    const bio = req.body.bio
    const id = req.params.id

    console.log(anonymous, profileVisibility, openToConnect, dmAvailability, notifications, bio, id)
    const sqlInsert = "UPDATE users_list SET `anonymous` = ?, `profile_visible` = ?, `open_to_connect` = ?, `dm_available` = ?, `notifications` = ?, `bio` = ? WHERE id = ?;"

    pool.query(sqlInsert, [anonymous, profileVisibility, openToConnect, dmAvailability, notifications, bio, id] , (err, result) => {
        res.send(result);
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



// USER LOGIN/LOGOUT POST REQUESTS 

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

app.get('/api/logout', (req, res) => {
    res.send("test logout");
})

app.post('/api/logout', (req, res) => {

    req.session.destroy(session.user);
    console.log("done");
    res.send;
});



// ROUTE FOR PROFILE 

app.get("/api/profile/:id", (req, res,) => {

    const userId = req.params.id;

    const sqlInsert = "SELECT * FROM users_list WHERE id = ?";

    pool.query(sqlInsert, [userId], (err, result) => {
        if (err) {
            res.send({err: err});
        } 
       
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ err: "Sadly something went wrong"});
        }
    });

});



app.post("/api/profile/:id", (req, res) => {


    const name = req.body.name
    const role = req.body.role
    const quote = req.body.quote
    const id = req.params.id

    const sqlInsert = "UPDATE users_list SET `name` = ?, `role` = ?, `quote` = ? WHERE id = ?;"

    pool.query(sqlInsert, [name, role, quote, id] , (err, result) => {
        if (err) {
            console.log(err)
        }

        if (result) {
            res.send(result);
        }
    });
});


app.post("/api/profileImg/:id", upload.single('avatar'),(req, res) => {

    // console.log(req.file);
    if(req.file === undefined){
        res.send({
        msg: 'Error: No File Selected!'
        });
    } else {
        console.log(req.file)

        const imgPath = req.file.filename;
        const id = req.params.id
    
        const sqlInsert = "UPDATE users_list SET `profile_picture` = ? WHERE id = ?;"
    
        pool.query(sqlInsert, [imgPath, id] , (err, result) => {
            if (err) {
                console.log(err)
            }
    
            if (result) {
                res.send({
                    data:result,
                    msg: 'Your avatar is updated!'
                });
            }
        });
    }
    
});


//==========================================================================================//
//                                      API Listener                                        //
//==========================================================================================//


app.listen(5000, () => {
    console.log("Running..")
})