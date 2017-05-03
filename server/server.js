let express     = require('express');
let bcrypt      = require('bcrypt');
let bodyParser  = require('body-parser');
let cookieParser= require('cookie-parser');
let session     = require('express-session');
let request     = require('request');
let db          = require('./db/db.js');
let router      = express.Router();
let config      = require('config');
// let config      = require('../node_modules/config');
let morgan      = require('morgan');
var PORT        = 8888;
// var PORT        = process.env.NODE_ENV || 8888;
let jobStarterRouter =  require('./resources/jobStarterRouter.js');
//passport
let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy;

let app         = express();


// A resource makes a cross-origin HTTP request when it requests a resource from a different domain, or port than the one which the first resource itself serves
// header is a key on the response object, so set it with the middle
app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,X-Auth-Token,Content-Type, Content-Length');
  //res.header('Content-Type', '*');

  console.log('this log comes with every header');
  next();
});

app.use(express.static('public'));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
// app.use(bodyParser.text());                                    
// app.use(bodyParser.json({ type: 'application/json'}));

app.use( jobStarterRouter );


//don't show the log when it is test
// console.log(config.util.getEnv('NODE_ENV'), 'node envyyy');
if(config.util.getEnv('NODE_ENV') !== 'test') {
//if(process.env.NODE_ENV !== 'test') {
  console.log('runs')
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}


// middlewear

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     testing123.findOne({ username: username }, function(err, user) {
//     // User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// app.post('/testing123',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );






app.listen( PORT, (err) => {
  if (err) console.log(err);
  console.log( 'Portgas D. Ace :' + PORT ); 
} );

module.exports = app;