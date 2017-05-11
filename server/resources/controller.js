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

exports.verifyUser = function(req, res){
  console.log(req.body, ' bodayyyeee')
  let email = req.body.email;
  // let salt = bcrypt.genSaltSync(10);
  // let hash = bcrypt.hashSync(req.body.password, salt);
  // let password = bcrypt.compareSync(req.body.password, hash);
  // console.log(email, password, ' verify me')

  // User.findOne({email: req.body.email}, (err, user)=>{
  //   if(err) throw err
  //   console.log(user, ' user')

  // });

  //======>***all fucked up because the password i should be comparing it to is actually what is in the database and also need to incorporate session and passport



  res.send('done');
}

