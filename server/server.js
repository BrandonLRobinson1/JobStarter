var express     = require( 'express' );
var bcrypt      = require('bcrypt');
var bodyParser  = require('body-parser');
var request     = require('request');
var router = express.Router()
var PORT        = 8888;
// process.env
var app         = express();


var firstDay123Test =  require('./resources/jobStarterRouter.js');
console.log(firstDay123Test)
//app.use(firstDay123Test);

app.listen( PORT, (err) => {
  if (err) console.log(err);
  //console.log( 'they will look like this :' + PORT ); 
} );

module.exports = app;