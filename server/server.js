let express          = require('express');
let bodyParser       = require('body-parser');
let session          = require('express-session');
let request          = require('request');
let db               = require('./db/db.js');
// let router      = express.Router(); // <----- error says it requires callback
let config           = require('config');
let morgan           = require('morgan');
var PORT             = 8888;
// var PORT        = process.env.NODE_ENV || 8888;
let jobStarterRouter =  require('./resources/jobStarterRouter.js');

let app              = express();

// console.log('SUPPRESS_NO_CONFIG_WARNING: ' + config.util.getEnv('SUPPRESS_NO_CONFIG_WARNING'));
// console.log(config.util.env)

// A resource makes a cross-origin HTTP request when it requests a resource from a different domain, or port than the one which the first resource itself serves
// header is a key on the response object, so set it with the middle
app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,X-Auth-Token,Content-Type, Content-Length');
  //res.header('Content-Type', '*');
  // res.header('Content-Type', "application/json");
  // console.log('this log comes with every header');
  next();
});

app.use(express.static('public'));

// app.use(flash());

app.set('trust proxy', 1) // trust first proxy 
app.use(session({
  cookie: {  secure: false, httpOnly: false, maxAge:30 * 60 * 1000 }, //path:'/Login', httpOnly: false, secure: false
  cookieName: 'jobStarter',
  secret: 'ilovescotchscotchyscotchscotch',
  resave: false,
  saveUninitialized: false,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000//,
  // genid: function(req) {
  //   return genuuid() // use UUIDs for session IDs 
  // }
})); 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy 
  sess.cookie.secure = true // serve secure cookies 
}

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
  console.log('NODE_ENV is test')
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}


app.listen( PORT, (err) => {
  if (err) console.log(err);
  console.log( 'Portgas D. Ace :' + PORT ); 
} );

module.exports = app; 