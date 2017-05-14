
// var app = require('../server');
let bcrypt        = require('bcrypt');
let passport      = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let User          = require('./testSchema');
let app           = require('../server');

console.log(app, ' its ok')


exports.passport;
exports.LocalStrategy;

exports.createUser = function(req, res){
  let email = req.body.email;
  // let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, 10); // no need to use salt can jst replace it with ten

  let newUser = new User( {
    email: email,
    password: hash
  } );
  
  User.findOne({email: email}, (err, user)=>{
    if (err) { return handleError(err) } 
    
    if (!user) {
      //console.log('heres where we create')
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
  let email = req.body.email;
  let password = req.body.password;
  //insert session or passport

  User.findOne({email: email}, (err, user)=>{
    if (err) return handleError(err);
    console.log('user found');

    bcrypt.compare(password, user.password, function(err, response) {
      //response is true if and only if passwords match
      if (response) {
        req.session.user = user;
        console.log(req.session, ' the sessh')
        res.status(201).send(user);
      } else {
        res.status(400).send('username or password incorrect');
      }

    });

  });

}

