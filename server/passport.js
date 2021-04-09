// const LocalStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt')
// const mysql = require('mysql');

// const pool = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'localhost',
//     user            : 'root',
//     password        : 'root',
//     database        : 'hygeia',
//     port            : 3306,
//     insecureAuth    : true,
// });

// module.exports = (passport) => {

//     passport.serializeUser((result, done) => {
//         done(null, result[0].id);
//     });
    
//       // used to deserialize the user
//       passport.deserializeUser((id, done) => {
//         pool.query('SELECT * FROM `users_list` WHERE id = ?', [id], (err, result) => {
//           done(err, result[0]);
//         });
//     });
    
//       // Local Strategy login
//     passport.use(
//         'local',
//         new LocalStrategy(({
//             usernameField : 'email',
//             passwordField : 'password',
//             passReqToCallback : true // 
//         }, (req, email, password, done) => {
    

//         // Match Username
//         let sqlInsert = 'SELECT * FROM users WHERE u_email = ?';
    
//         pool.query(sqlInsert, [email], function(err, result) {
//             console.log(result)
//           if (err)
//             return done(err);
//           if (!result.length) {
//             return done(null, false, {message: 'Wrong email!'});
//           }
    
//           //  Match Password
//           bcrypt.compareSync(password, result[0].u_password, function(err, match) {
//             if(err)
//               return done(err);
//             if(match){
//               return done(null, result[0]);
//             } else {
//               return done(null, false, {message: 'Wrong password!'});
//             }
//           });
//         });
//     })))
// }
