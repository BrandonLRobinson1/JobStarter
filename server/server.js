let express     = require( 'express' );
let bcrypt      = require('bcrypt');
let bodyParser  = require('body-parser');
let request     = require('request');
let db          = require('./db/db.js');
let router      = express.Router()
// let config      = require('../config');
let config      = require('config');
let morgan      = require('morgan');
var PORT        = process.env.NODE_ENV || 8888;
let jobStarterRouter =  require('./resources/jobStarterRouter.js');

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


if (config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

// middlewear

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
// app.use(bodyParser.text());                                    
// app.use(bodyParser.json({ type: 'application/json'}));

app.use( jobStarterRouter );

app.listen( PORT, (err) => {
  if (err) console.log(err);
  console.log( 'Portgas D. Ace :' + PORT ); 
} );

module.exports = app;