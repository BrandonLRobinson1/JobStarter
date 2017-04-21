let express     = require( 'express' );
let bcrypt      = require('bcrypt');
let bodyParser  = require('body-parser');
let request     = require('request');
let router      = express.Router()
// let config      = require('../config');
let config      = require('config');
let morgan      = require('morgan');

var PORT        = process.env.NODE_ENV || 8888;
// process.env
let jobStarterRouter =  require('./resources/jobStarterRouter.js');

let app         = express();


if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

// middlewear

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));

app.use( jobStarterRouter );


app.listen( PORT, (err) => {
  if (err) console.log(err);
  console.log( 'they will look like this :' + PORT ); 
} );

module.exports = app;