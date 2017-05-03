// var app = require('../server');
// console.log(app)
let bcrypt      = require('bcrypt');


let User = require('./testSchema.js');

exports.testUser = function(req, res){

  let email = req.body.email;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);

  //console.log(email, ' email', hash, ' saltyyyyy');
  // var newUser = new User( req.body );

  var newUser = new User( {
    email: email,
    password: hash
  } );

  console.log(newUser, ' newUser');
  
  newUser.save( (err, newUser) => {
    
    if (err) { 
      console.error(err) 
    } else {
    console.log('saved');
    newUser.myName();
    }

  } );
  res.send('done');
  
};

