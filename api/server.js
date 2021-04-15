const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require("bcryptjs"); // Use bcryptjs when making use of async
const path = require('path');
const multer  = require('multer')

//==========================================================================================//
//                                  Create connection + config                              //
//==========================================================================================//

//TODO: Need to find a way to change this hard coding into a variable

// Instead of using the const "database", "pool" will be the one 

app.use ( cors (
    { origin:`https://hygeia.netlify.app`,
      credentials: true,
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    }
))

const pool = mysql.createConnection ({
    user                : process.env.DB_USER, 
    host                : process.env.DB_ENDPOINT, 
    database            : process.env.DB_DB, 
    password            : process.env.DB_PASS,  
    port                : process.env.DB_PORT
});
console.log("Database connecting...")
pool.connect();
console.log("Connected!")

app.use('/', express.static(path.join(__dirname, '/')));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://hygeia.netlify.app/");
//     res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



// app.use(session({
//     name: 'user',
//     secret: 'keyboard cat',
//     resave: true, 
//     httpOnly: true,
//     path: '/',
//     saveUninitialized: true, 
//     cookie: { maxAge: 60000, secure:false}
// }));


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

//==========================================================================================//
//                                 Create queries + req, res                                //
//==========================================================================================//

app.get("/", (req, res) => {

    const sqlUsers = "SELECT * FROM `users_list`;"
    pool.query(sqlUsers, (err, result) => {
        if (err) {
            res.send({message:err});
        } else {
            res.send({message: result});
        }
    })
    // res.send("Hello World!")
})

app.get("/users", (req, res) => {

    const sqlUsers = "SELECT * FROM `users_list`;"
    pool.query(sqlUsers, (err, result) => {
        res.send({message: result});
    })

})

// Problem (FIXED): use backticks when naming the tabel collumns!

// when you want a new app.post(), use "api/<your component>"

app.get("/api/dev/test", (req, res) => {
    res.send("stuff");
    // const sqlInsert = "INSERT INTO users_list (`u_email`, `u_password`, `u_id`) VALUE ('test@email.com', 'password', '22');"
    // pool.query(sqlInsert , (err, result) => {
    //     console.log(err)
    // });
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

            pool.query(sqlEmail, [u_email], async (err, result) => {
            
            // if (err) throw err;
    
                if (result.length > 0) {
    
                    return res.send({error: "User already exists!"})
    
                } else {
                    const saltRounds = 10;
                    const hashed = await bcrypt.hash(u_password, saltRounds);
                    const sqlInsert = "INSERT INTO users_list (`u_email`, `u_password`) VALUE (?, ?);"
    
                    pool.query(sqlInsert, [u_email, hashed], (err, result) => {
                
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

    pool.query(sqlInsert, [age, gender, languages, experiences, website, social, id] , (err, result) => {

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

    pool.query(sqlInsert, [anonymous, profileVisibility, openToConnect, dmAvailability, notifications, bio, id] , (err, result) => {
        res.send(result);
    });
});



// // // LOGIN GET REQUEST
app.get("/api/login", (req, res) => {
    
    const sqlActive = "SELECT * FROM users_list WHERE id = ? AND logged_in = true";
    const id = 52;


    pool.query(sqlActive, [id] , (err, response) => {
        
        if (response.length > 0) {
            res.send({loggedIn: true, user: response[0]});
        } else { 
            res.send({loggedIn: false});
        }
    });
})



// USER LOGIN/LOGOUT POST REQUESTS 

app.post("/api/login", (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const sqlInsert = "SELECT * FROM users_list WHERE u_email = ?";


    pool.query(sqlInsert, [email], (err, result) => {
        if (err) {
            res.send({err: err});
        } else {
            if (result.length > 0) {
                
                bcrypt.compare(password, result[0].u_password, function(err, response) {
                   
                    if (response === true) {
                        // console.log(result[0].id)
                        // req.session.user = result;
                        // console.log(result)
                        const id = result[0].id || 52;
                        const sql = "UPDATE users_list SET `logged_in` = true WHERE id = ?;"
                      
                        pool.query(sql, [id] , (err, response) => {
                            
                            res.send(result);
                        });
                    } else {
                        res.send({ err:"Sadly, your email and/or password combination doesn't seem correct. Please try again."});
                    }   
                });
               
            } else {
                res.send({ err: "Sadly, your email doesn't seem correct. Please try again or register if you don't have an account yet."});
            }
        }
        
    });

   
 
});

app.get('/api/logout', (req, res) => {
    res.send("test logout");
})

app.post('/api/logout', (req, res) => {

    const id = 50;
    const sql = "UPDATE users_list SET `logged_in` = false WHERE id = ?;"
                      
    pool.query(sql, [id] , (err, response) => {
        
    });
});



// ROUTE FOR PROFILE 

app.get("/api/profile/:id", (req, res,) => {

    const userId = req.params.id;


    const sqlInsert = "SELECT * FROM `users_list` WHERE id = ?";

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

// app.post("/api/moodtracker/:id", (req, res) => {


//     const feeling = req.body.feeling
//     const id = req.params.id



//     const sqlInsert = "UPDATE mood_tracker SET `feeling` = ?  WHERE user_id = ?;"

//     pool.query(sqlInsert, [feeling, id] , (err, result) => {
        
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
    
        pool.query(sqlInsert, [imgPath, id] , (err, result) => {
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

    pool.query(sqlInsert, [slug], (err, result) => {
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


    pool.query(sqlInsert, (err, result) => {
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


app.listen(port || 5000, () => {
    console.log("Running..")
})