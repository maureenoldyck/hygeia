const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const cors = require('cors');
const { reset } = require('nodemon');
const bcrypt = require("bcryptjs"); // Use bcryptjs when making use of async
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
require('dotenv').config();



app.use(cookieParser("keyboard cat"));
// require("./passport")(passport);



const multer  = require('multer')
const path = require('path');
const { ENOTEMPTY } = require('constants');

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
    // limits : {fileSize : 1000000}
    // fileFilter: function(req, file, cb){
    //   checkFileType(file, cb);
    // }
})

app.use('/', express.static(path.join(__dirname, '/public')));

//==========================================================================================//
//                                  Create connection + config                              //
//==========================================================================================//

//TODO: Need to find a way to change this hard coding into a variable

// Instead of using the const "database", "connect" will be the one 
const connect = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.REACT_APP_DB_SERVER_HOST,
    user            : process.env.REACT_APP_DB_SERVER_USER,
    password        : process.env.REACT_APP_DB_SERVER_PASSWORD,
    database        : process.env.REACT_APP_DB_SERVER_NAME,
    port            : process.env.REACT_APP_DB_SERVER_PORT,
    // insecureAuth    : true,
});

// console.log(process.env.REACT_APP_DB_SERVER_HOST);



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
app.set('trust proxy', 1)

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://hygeia-app.herokuapp.com:3306");
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
        'Access-Control-Allow-Credentials', true
    );
    next();
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    //
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname = 'client/build/index.html'));
    })
  }

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  });


passport.use(
    'local', new LocalStrategy(  
    {
        usernameField : 'email',
        passwordField : 'password',
    },
    (email, password, done) => {

    // Match Username
    let sqlInsert = 'SELECT * FROM `users_list` WHERE u_email = ?';
        
    connect.query(sqlInsert, [email], (err, user) => {
    
    if (err)
        return done(err);
    if (!user) {
        return done(null, false, {message: 'Wrong email!'});
    }


    //  Match Password
    bcrypt.compare(password, user[0].u_password, function(err, match) {

        if(err)
        return done(err);
        if(match === true){
        return done(null, user);
        } else {
        return done(null, false, {message: 'Wrong password!'});
        }
        
    });
    
    });
}))

    

passport.serializeUser((user, done) => {
    done(null, {
        id: user["id"],
        userName: user["name"],
        email: user["u_email"],
        engineID: user['engineID'],
        uSecret: user['uSecret'],
     });
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  });
  // used to deserialize the user
//   passport.deserializeUser((id, done) => {
//     connect.query('SELECT * FROM `users_list` WHERE id = ?', [id], (err, result) => {
//       done(err, result[0]);
//     });
// });

// const checkAuthenticated = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return next();
//     } else {
//         res.redirect('/');
//     }
// }

//==========================================================================================//
//                                 Create queries + req, res                                //
//==========================================================================================//


// Problem (FIXED): use backticks when naming the tabel collumns!

// when you want a new app.post(), use "api/<your component>"

app.get("/api/dev/test", (req, res) => {
    res.send("stuff");
    const sqlInsert = "INSERT INTO users_list (`u_email`, `u_password`, `u_id`) VALUE ('test@email.com', 'password', '22');"
    connect.query(sqlInsert , (err, result) => {
        console.log(err)
    });
})

app.post("/api/register", async (req, res) => {

    const u_email = req.body.email;
    const u_password = req.body.password;
    const passwordConfirm = req.body.password2;

    if (!u_email, !u_password, !passwordConfirm) {

        if (!u_email) {
            return res.send({email: 'Email required'});
        } 

        if (!u_password) {
            return res.send({password: 'Password is required'});
        } 
    
        if (!passwordConfirm) {
            return res.send({password2: 'Password is required'});
        } 


    } else {

        if (!/\S+@\S+\.\S+/.test(u_email)) {
            return res.send({email: 'Email address is invalid'});
        } else if (u_password.length < 6) {
            return res.send({password: 'Password needs to be 6 characters or more'});
        } else if (passwordConfirm !== u_password) {
            return res.send({password2: 'Passwords do not match'});
        } else {

            const sqlEmail = "SELECT * FROM users_list WHERE u_email = (?);";

            connect.query(sqlEmail, [u_email], async (err, result) => {
            
            // if (err) throw err;
    
                if (result.length > 0) {
    
                    return res.send({error: "User already exists!"})
    
                } else {
                    const saltRounds = 10;
                    const hashed = await bcrypt.hash(u_password, saltRounds);
                    const sqlInsert = "INSERT INTO users_list (`u_email`, `u_password`) VALUE (?, ?);"
    
                    connect.query(sqlInsert, [u_email, hashed], (err, result) => {
                
                    res.send({success:"Huray, your account has been created!"})
    
                    });
    
                }
            })

        }

      

    }
    
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

    connect.query(sqlInsert, [age, gender, languages, experiences, website, social, id] , (err, result) => {

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

    const sqlInsert = "UPDATE users_list SET `anonymous` = ?, `profile_visible` = ?, `open_to_connect` = ?, `dm_available` = ?, `notifications` = ?, `bio` = ? WHERE id = ?;"

    connect.query(sqlInsert, [anonymous, profileVisibility, openToConnect, dmAvailability, notifications, bio, id] , (err, result) => {
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

    const sqlInsert = "SELECT * FROM users_list WHERE u_email = ?";


    connect.query(sqlInsert, [email], (err, result) => {

        if (err) {
            res.send(err);
        } 
        
        if (result) {

            bcrypt.compare(password, result[0].u_password, function(err, response) {
                if (response === true) {
                    req.session.user = result;
                    res.send(result);
                } else {
                    res.send({ err:"Sadly, your email and/or password combination doesn't seem correct. Please try again."});
                }   
            });
           
        } 
        // else {
        //     res.send('hello world')
        //     // res.send({ err: "Sadly, your email doesn't seem correct. Please try again or register if you don't have an account yet."});
        // }
    });
});


    // passport.authenticate("local", ((req, res) => { 
    
        // console.log(res)
 
        // if (!user) {
        //     res.send({err: "User not found!"});
        //   } else {
        //     res.send(req.user)
        //   }
// })))


app.get('/api/logout', (req, res) => {
    res.send("test logout");
})

app.post('/api/logout', (req, res) => {

    req.session.destroy(session.user);

    res.send;
});



// ROUTE FOR PROFILE 

app.get("/api/profile/:id", (req, res,) => {

    const userId = req.params.id;


    const sqlInsert = "SELECT * FROM `users_list` WHERE id = ?";

    connect.query(sqlInsert, [userId], (err, result) => {



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

    connect.query(sqlInsert, [name, role, quote, id] , (err, result) => {
        
        if (err) {
            console.log(err)
        }

        if (result) {
            res.send(result);
        }
    });
});

// app.post("/api/moodtracker/:id", (req, res) => {


//     const feeling = req.body.feeling
//     const id = req.params.id



//     const sqlInsert = "UPDATE mood_tracker SET `feeling` = ?  WHERE user_id = ?;"

//     connect.query(sqlInsert, [feeling, id] , (err, result) => {
        
//         if (err) {
//             console.log(err)
//         }

//         if (result) {
//             console.log(result)
//             res.send(result);
//         }
//     });
// });


app.post("/api/profileImg/:id", upload.single('avatar'),(req, res, err) => {

    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
    } else if (!req.file) {
        res.send({
            msg: 'Error: Please upload a valid image!'
        });
    } else {

        const imgPath = req.file.filename;
        const id = req.params.id
    
        const sqlInsert = "UPDATE users_list SET `profile_picture` = ? WHERE id = ?;"
    
        connect.query(sqlInsert, [imgPath, id] , (err, result) => {
            if (err) {
                console.log(err)
                res.send({
                    msg: err
                })
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


app.get("/api/documentation/:slug", (req, res,) => {

    const slug = req.params.slug;

    const sqlInsert = "SELECT * FROM documentation WHERE `slug` = ?";

    connect.query(sqlInsert, [slug], (err, result) => {
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

app.get('/api/search/:keywords', (req, res) => {

    const keywords = req.params.keywords;


    const sqlInsert = "SELECT * from documentation WHERE `description` like '%" + keywords + "%'"


    connect.query(sqlInsert, (err, result) => {
        if (result) {
            res.send(result);
        } else {
            res.send({ err: "Sadly something went wrong"});
        }
    });

});

//==========================================================================================//
//                                      API Listener                                        //
//==========================================================================================//


app.listen(port, () => {
    console.log("Running..")
})