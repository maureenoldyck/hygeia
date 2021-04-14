/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import \"core-js/stable\";\n// import \"regenerator-runtime/runtime\";\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\nconst app = express();\nconst port = process.env.DATABASE_URL || 5000; // const port = 5000;\n\nconst mysql = __webpack_require__(/*! mysql */ \"mysql\");\n\nconst {\n  Pool\n} = __webpack_require__(/*! pg */ \"pg\").native;\n\nconst cors = __webpack_require__(/*! cors */ \"cors\");\n\nconst {\n  reset\n} = __webpack_require__(/*! nodemon */ \"nodemon\");\n\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\"); // Use bcryptjs when making use of async\n\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst multer = __webpack_require__(/*! multer */ \"multer\");\n\nconst {\n  ENOTEMPTY\n} = __webpack_require__(/*! constants */ \"constants\");\n\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, \"public\");\n  },\n  filename: function (req, file, cb) {\n    const ext = file.mimetype.split(\"/\")[1];\n    cb(null, `uploads/${file.fieldname}-${Date.now()}.${ext}`);\n  }\n});\nconst upload = multer({\n  // destination: 'client/public/uploads/',\n  storage: storage // limits : {fileSize : 1000000}\n  // fileFilter: function(req, file, cb){\n  //   checkFileType(file, cb);\n  // }\n\n}); //==========================================================================================//\n//                                  Create connection + config                              //\n//==========================================================================================//\n//TODO: Need to find a way to change this hard coding into a variable\n// Instead of using the const \"database\", \"pool\" will be the one \n\nconst pool = new Pool({\n  connectionString: process.env.DATABASE_URL,\n  user: process.env.PG_USER || \"root\",\n  //postgres user\n  host: process.env.PG_ENDPOINT || \"localhost\",\n  //localhost (I also tried 127.0.0.1)\n  database: process.env.PG_DB || \"hygeia\",\n  //database name to connect to\n  password: process.env.PG_PASS || \"root\",\n  //postgres user password\n  port: process.env.PG_PORT || 3306 // connectionLimit : 10,\n  // host            : 'localhost',\n  // user            : 'root',\n  // password        : 'root',\n  // database        : 'hygeia',\n  // port            : 3306,\n  // insecureAuth    : true,\n\n});\npool.connect();\napp.use(cors({\n  origin: `https://hygeia.netlify.app`,\n  credentials: true,\n  \"methods\": \"GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS\"\n}));\n\nconst {\n  Client\n} = __webpack_require__(/*! pg */ \"pg\");\n\nconst client = new Client({\n  connectionString: process.env.DATABASE_URL,\n  ssl: {\n    rejectUnauthorized: false\n  }\n});\napp.use('/', express.static(path.join(__dirname, '/'))); // app.use((req, res, next) => {\n//     res.setHeader(\"Access-Control-Allow-Origin\", \"https://hygeia.netlify.app/\");\n//     res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');\n//     res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');\n//     res.header(\n//         \"Access-Control-Allow-Headers\",\n//         \"Origin, X-Requested-With, Content-Type, Accept\"\n//     );\n//     next();\n// });\n\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.set('trust proxy', 1); // trust first proxy\n// app.use(session({\n//     name: 'user',\n//     secret: 'keyboard cat',\n//     resave: true, \n//     httpOnly: true,\n//     path: '/',\n//     saveUninitialized: true, \n//     cookie: { maxAge: 60000, secure:false}\n// }));\n//==========================================================================================//\n//                                 Create queries + req, res                                //\n//==========================================================================================//\n\napp.get(\"/\", (req, res) => {\n  res.send(\"Hello World!\");\n});\napp.get(\"/users\", (req, res) => {\n  const sqlUsers = \"SELECT * FROM `users_list`;\";\n  pool.query(sqlUsers, (err, result) => {\n    res.send({\n      message: result\n    });\n  });\n}); // Problem (FIXED): use backticks when naming the tabel collumns!\n// when you want a new app.post(), use \"api/<your component>\"\n\napp.get(\"/api/dev/test\", (req, res) => {\n  res.send(\"stuff\"); // const sqlInsert = \"INSERT INTO users_list (`u_email`, `u_password`, `u_id`) VALUE ('test@email.com', 'password', '22');\"\n  // pool.query(sqlInsert , (err, result) => {\n  //     console.log(err)\n  // });\n});\napp.post(\"/api/register\", async (req, res) => {\n  const u_email = req.body.email;\n  const u_password = req.body.password;\n  const passwordConfirm = req.body.password2;\n\n  if (!u_email, !u_password, !passwordConfirm) {\n    if (!u_email) {\n      return res.send({\n        email: 'Email required'\n      });\n    }\n\n    if (!u_password) {\n      return res.send({\n        password: 'Password is required'\n      });\n    }\n\n    if (!passwordConfirm) {\n      return res.send({\n        password2: 'Password is required'\n      });\n    }\n  } else {\n    if (!/\\S+@\\S+\\.\\S+/.test(u_email)) {\n      return res.send({\n        email: 'Email address is invalid'\n      });\n    } else if (u_password.length < 6) {\n      return res.send({\n        password: 'Password needs to be 6 characters or more'\n      });\n    } else if (passwordConfirm !== u_password) {\n      return res.send({\n        password2: 'Passwords do not match'\n      });\n    } else {\n      const sqlEmail = \"SELECT * FROM users_list WHERE u_email = (?);\";\n      pool.query(sqlEmail, [u_email], async (err, result) => {\n        // if (err) throw err;\n        if (result.length > 0) {\n          return res.send({\n            error: \"User already exists!\"\n          });\n        } else {\n          const saltRounds = 10;\n          const hashed = await bcrypt.hash(u_password, saltRounds);\n          const sqlInsert = \"INSERT INTO users_list (`u_email`, `u_password`) VALUE (?, ?);\";\n          pool.query(sqlInsert, [u_email, hashed], (err, result) => {\n            res.send({\n              success: \"Huray, your account has been created!\"\n            });\n          });\n        }\n      });\n    }\n  }\n});\napp.post(\"/api/details/:id\", (req, res) => {\n  const age = req.body.age;\n  const gender = req.body.gender;\n  const languages = req.body.languages;\n  const experiences = req.body.experiences;\n  const website = req.body.website;\n  const social = req.body.social;\n  const id = req.params.id;\n  const sqlInsert = \"UPDATE users_list SET `age` = ?, `gender` = ?, `language` = ?, `experience_id` = ?, `my_web` = ?, `my_soc` = ? WHERE id = ?;\";\n  pool.query(sqlInsert, [age, gender, languages, experiences, website, social, id], (err, result) => {});\n});\napp.post(\"/api/settings/:id\", (req, res) => {\n  const anonymous = req.body.anonymous;\n  const profileVisibility = req.body.profileVisibility;\n  const openToConnect = req.body.openToConnect;\n  const dmAvailability = req.body.dmAvailability;\n  const notifications = req.body.notifications;\n  const bio = req.body.bio;\n  const id = req.params.id;\n  const sqlInsert = \"UPDATE users_list SET `anonymous` = ?, `profile_visible` = ?, `open_to_connect` = ?, `dm_available` = ?, `notifications` = ?, `bio` = ? WHERE id = ?;\";\n  pool.query(sqlInsert, [anonymous, profileVisibility, openToConnect, dmAvailability, notifications, bio, id], (err, result) => {\n    res.send(result);\n  });\n}); // // // LOGIN GET REQUEST\n\napp.get(\"/api/login\", (req, res) => {\n  const sqlActive = \"SELECT * FROM users_list WHERE id = ? AND logged_in = true\";\n  const id = 52;\n  pool.query(sqlActive, [id], (err, response) => {\n    if (response.length > 0) {\n      res.send({\n        loggedIn: true,\n        user: response[0]\n      });\n    } else {\n      res.send({\n        loggedIn: false\n      });\n    }\n  });\n}); // USER LOGIN/LOGOUT POST REQUESTS \n\napp.post(\"/api/login\", (req, res) => {\n  const email = req.body.email;\n  const password = req.body.password;\n  const sqlInsert = \"SELECT * FROM users_list WHERE u_email = ?\";\n  pool.query(sqlInsert, [email], (err, result) => {\n    if (err) {\n      res.send({\n        err: err\n      });\n    } else {\n      if (result.length > 0) {\n        bcrypt.compare(password, result[0].u_password, function (err, response) {\n          if (response === true) {\n            // console.log(result[0].id)\n            // req.session.user = result;\n            // console.log(result)\n            const id = result[0].id || 52;\n            const sql = \"UPDATE users_list SET `logged_in` = true WHERE id = ?;\";\n            pool.query(sql, [id], (err, response) => {\n              res.send(result);\n            });\n          } else {\n            res.send({\n              err: \"Sadly, your email and/or password combination doesn't seem correct. Please try again.\"\n            });\n          }\n        });\n      } else {\n        res.send({\n          err: \"Sadly, your email doesn't seem correct. Please try again or register if you don't have an account yet.\"\n        });\n      }\n    }\n  });\n});\napp.get('/api/logout', (req, res) => {\n  res.send(\"test logout\");\n});\napp.post('/api/logout', (req, res) => {\n  const id = 50;\n  const sql = \"UPDATE users_list SET `logged_in` = false WHERE id = ?;\";\n  pool.query(sql, [id], (err, response) => {});\n}); // ROUTE FOR PROFILE \n\napp.get(\"/api/profile/:id\", (req, res) => {\n  const userId = req.params.id;\n  const sqlInsert = \"SELECT * FROM `users_list` WHERE id = ?\";\n  pool.query(sqlInsert, [userId], (err, result) => {\n    if (err) {\n      res.send({\n        err: err\n      });\n    }\n\n    if (result.length > 0) {\n      res.send(result);\n    } else {\n      res.send({\n        err: \"Sadly something went wrong\"\n      });\n    }\n  });\n});\napp.post(\"/api/profile/:id\", (req, res) => {\n  const name = req.body.name;\n  const role = req.body.role;\n  const quote = req.body.quote;\n  const id = req.params.id;\n  const sqlInsert = \"UPDATE users_list SET `name` = ?, `role` = ?, `quote` = ? WHERE id = ?;\";\n  pool.query(sqlInsert, [name, role, quote, id], (err, result) => {\n    if (err) {\n      console.log(err);\n    }\n\n    if (result) {\n      res.send(result);\n    }\n  });\n}); // app.post(\"/api/moodtracker/:id\", (req, res) => {\n//     const feeling = req.body.feeling\n//     const id = req.params.id\n//     const sqlInsert = \"UPDATE mood_tracker SET `feeling` = ?  WHERE user_id = ?;\"\n//     pool.query(sqlInsert, [feeling, id] , (err, result) => {\n//         if (err) {\n//             console.log(err)\n//         }\n//         if (result) {\n//             console.log(result)\n//             res.send(result);\n//         }\n//     });\n// });\n\napp.post(\"/api/profileImg/:id\", upload.single('avatar'), (req, res, err) => {\n  if (!req.file.originalname.match(/\\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {\n    req.fileValidationError = 'Only image files are allowed!';\n    res.send({\n      msg: 'Only image files (jpg, jpeg, png) are allowed!'\n    });\n  } else if (!req.file) {\n    res.send({\n      msg: 'Error: Please upload a valid image!'\n    });\n  } else {\n    const imgPath = req.file.filename;\n    const id = req.params.id;\n    const sqlInsert = \"UPDATE users_list SET `profile_picture` = ? WHERE id = ?;\";\n    pool.query(sqlInsert, [imgPath, id], (err, result) => {\n      if (err) {\n        console.log(err);\n        res.send({\n          msg: err\n        });\n      }\n\n      if (result) {\n        res.send({\n          data: result,\n          msg: 'Your avatar is updated!'\n        });\n      }\n    });\n  }\n});\napp.get(\"/api/documentation/:slug\", (req, res) => {\n  const slug = req.params.slug;\n  const sqlInsert = \"SELECT * FROM documentation WHERE `slug` = ?\";\n  pool.query(sqlInsert, [slug], (err, result) => {\n    if (err) {\n      res.send({\n        err: err\n      });\n    }\n\n    if (result.length > 0) {\n      res.send(result);\n    } else {\n      res.send({\n        err: \"Sadly something went wrong\"\n      });\n    }\n  });\n});\napp.get('/api/search/:keywords', (req, res) => {\n  const keywords = req.params.keywords;\n  const sqlInsert = \"SELECT * from documentation WHERE `description` like '%\" + keywords + \"%'\";\n  pool.query(sqlInsert, (err, result) => {\n    if (result) {\n      res.send(result);\n    } else {\n      res.send({\n        err: \"Sadly something went wrong\"\n      });\n    }\n  });\n}); //==========================================================================================//\n//                                      API Listener                                        //\n//==========================================================================================//\n\napp.listen(process.env.PORT || 5000, \"localhost\", () => {\n  console.log(\"Running..\");\n});\n\n//# sourceURL=webpack://api/./server.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("constants");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");;

/***/ }),

/***/ "nodemon":
/*!**************************!*\
  !*** external "nodemon" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemon");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("pg");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	
/******/ })()
;