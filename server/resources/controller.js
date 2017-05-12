// var app = require('../server');
let bcrypt      = require('bcrypt');

let User = require('./testSchema.js');

exports.createUser = function(req, res){
  let email = req.body.email;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  //console.log(email, ' email', hash, ' saltyyyyy');
  // var newUser = new User( req.body );

  var newUser = new User( {
    email: email,
    password: hash
  } );
  
  //******* need to use findone, if it doesnt exist them save
  User.findOne({email: email}, (err, user)=>{
    if (err) { return handleError(err) } 
    if (!user) {
      console.log('heres where we create')
      newUser.save( function(err, newuser){
        if (err) console.log(err)
        console.log(newuser);
        res.status(201).send(newUser);
      } );
    } else {
      console.log('already created');
      res.status(400).send('user already exists');
    }
  });
  
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

