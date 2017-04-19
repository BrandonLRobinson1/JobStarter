var express     = require( 'express' );
var bcrypt      = require('bcrypt');
var bodyParser  = require('body-parser');
var request     = require('request');
var PORT        = 8888;

// process.env

var app         = express();


app.listen( PORT, () => {
  if (err) console.log(err);
  console.log( 'will look like this :' + PORT ); 
} );