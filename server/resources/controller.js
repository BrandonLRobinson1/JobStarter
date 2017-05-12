// var app = require('../server');
let bcrypt      = require('bcrypt');

let User = require('./testSchema.js');

exports.createUser = function(req, res){
  let email = req.body.email;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  //console.log(email, ' email', hash, ' saltyyyyy');
  // var newUser = new User( req.body );

  var result;
  var newUser = new User( {
    email: email,
    password: hash
  } );

  console.log(newUser, ' newUser');
  
  //******* need to findone, if it doesnt exist them save
  newUser.save( (err, newUser) => {
    
    if (err) { 
      console.error(err, ' duplicate!!!');
      res.status(400).send('user already exists');
    } else {
      console.log('saved');
      newUser.myName();
      res.status(201).send(newUser);
    }

  } );
  
};

exports.verifyUser = function(req, res){
  console.log(req.body, ' bodayyyeee')
  let email = req.body.email;
  // let salt = bcrypt.genSaltSync(10);
  // let hash = bcrypt.hashSync(req.body.password, salt);
  // let password = bcrypt.compareSync(req.body.password, hash);
  // console.log(email, password, ' verify me')
  User.findOne({email: email}, (err, user)=>{
    if (err) return handleError(err);
    console.log(user, ' user found');

  });
  //======>***all fucked up because the password i should be comparing it to is actually what is in the database and also need to incorporate session and passport

  res.send('done');
}

