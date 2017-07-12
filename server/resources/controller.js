// var app = require('../server');
let bcrypt        = require('bcrypt');
let User          = require('./testSchema');

exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.createUser = function(req, res){
  let email = req.body.email;
  // let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.pw, 10); // no need to use salt can jst replace it with ten

  let newUser = new User( {
    email: email,
    password: hash
  } );
  
  let findTheUser = User.findOne({email: email});

  findTheUser
    .then( (user) => {
      if(!user){
        newUser.save()
          .then( (userNew) => {
            res.status(201).send(userNew);
          })
          // .catch( (err) => {
          //   throw Error(err);
          // } );
      } else {
        res.status(400).send('this user/email has already been created');
      }
    } )
    .catch( (err) => {
      console.log('there is an issue broooo')
      console.log(err);
      throw Error(err);
    })


  // =======> OLD PROMISE
  // User.findOne({email: email}, (err, user) => {
  //   if(err) reject(err);

  //   console.log(user, ' this is the user ')
  //   if(!user){
  //     //console.log('this user/email has already been created');
  //     newUser.save()
  //       .then( (user) => {
  //         res.status(201).send(user);
  //       })
  //       .catch( (err) => {
  //         console.error(err);
  //         console.log('did not save')
  //       } )
  //     // res.status(400).send('this user/email has already been created');
  //     //resolve();
  //   } else {
  //     // console.log('this user/email has already been created')
  //     res.status(400).send('this user/email has already been created');
  //     //resolve();
  //   }
  // } );

};


exports.verifyUser = function(req, res){

  let email = req.body.email;
  let password = req.body.pw;
  //insert session or passport

  User.findOne({email: email}, (err, user)=>{
    if (err) return handleError(err);
    console.log('user found, verifying password...');

    bcrypt.compare(password, user.password, function(err, response) {
      //response is true if and only if passwords match
      if (response) {
        req.session.regenerate(function(err) {
          // will have a new session here
          console.log('password verified...session created');
          //console.log(req.session, ' delete me')
        })
        res.status(201).send(user);
      } else {
        console.log('username or password is incorrect');
        res.status(400).send('username or password is incorrect');
      }
    });
  });
};


exports.updateUser = function(req, res){

  let userEmail = req.body.userEmail;
  let infoObj = req.body.stateData;
  let { name, address, address2, relocation, age, phone, resume, coverLetter, linkedIn, gitHub, authorized, disability } = infoObj;

  User.findOneAndUpdate({email: userEmail}, {
    '$set': 
      {"userInfo.name": name,
       "userInfo.address": address,
       "userInfo.address2": address2,
       "userInfo.relocation": relocation,
       "userInfo.age": age,
       "userInfo.phone": phone,
       "userInfo.resume": resume,
       "userInfo.coverLetter": coverLetter,
       "userInfo.linkedIn": linkedIn,
       "userInfo.gitHub": gitHub,
       "userInfo.authorized": authorized,
       "userInfo.disability": disability
      }
   },
  {'new': true},
  function(err, data){
    if(err) return err;
    if ( data ){
      console.log('new user data saved -- name, address, linkedIn etc')
      res.status(201).send(data);
    } else {
      console.log('your form data might be trash');
      res.status(400).send('something is wrong with your data R2D2');
    }
  }  
)};







// // var app = require('../server');
// let bcrypt        = require('bcrypt');
// let User          = require('./testSchema');

// exports.catchErrors = (fn) => {
//   return function(req, res, next) {
//     return fn(req, res, next).catch(next);
//   };
// };

// exports.createUser = function(req, res){

//   let email = req.body.email;
//   // let salt = bcrypt.genSaltSync(10);
//   let hash = bcrypt.hashSync(req.body.pw, 10); // no need to use salt can jst replace it with ten

//   let newUser = new User( {
//     email: email,
//     password: hash
//   } );
  
//   User.findOne({email: email}, (err, user)=>{
//     if (err) { return handleError(err) } 
//     console.log(user,' this is the user tho (ends up null)')
//     if (!user) {
//       newUser.save( function(err, newuser){
//         if (err) console.log(err);
//         console.log('succesfuly saved new user');
//         res.status(201).send(newUser);
//       } );
//     } else {
//       console.log('this user/email has already been created');
//       res.status(400).send('this user/email has already been created');
//     }
//   });
// };


// exports.verifyUser = function(req, res){

//   let email = req.body.email;
//   let password = req.body.pw;
//   //insert session or passport

//   User.findOne({email: email}, (err, user)=>{
//     if (err) return handleError(err);
//     console.log('user found, verifying password...');

//     bcrypt.compare(password, user.password, function(err, response) {
//       //response is true if and only if passwords match
//       if (response) {
//         req.session.regenerate(function(err) {
//           // will have a new session here
//           console.log('password verified...session created');
//           //console.log(req.session, ' delete me')
//         })
//         res.status(201).send(user);
//       } else {
//         console.log('username or password is incorrect');
//         res.status(400).send('username or password is incorrect');
//       }
//     });
//   });
// };


// exports.updateUser = function(req, res){

//   let userEmail = req.body.userEmail;
//   let infoObj = req.body.stateData;
//   let { name, address, address2, relocation, age, phone, resume, coverLetter, linkedIn, gitHub, authorized, disability } = infoObj;

//   User.findOneAndUpdate({email: userEmail}, {
//     '$set': 
//       {"userInfo.name": name,
//        "userInfo.address": address,
//        "userInfo.address2": address2,
//        "userInfo.relocation": relocation,
//        "userInfo.age": age,
//        "userInfo.phone": phone,
//        "userInfo.resume": resume,
//        "userInfo.coverLetter": coverLetter,
//        "userInfo.linkedIn": linkedIn,
//        "userInfo.gitHub": gitHub,
//        "userInfo.authorized": authorized,
//        "userInfo.disability": disability
//       }
//    },
//   {'new': true},
//   function(err, data){
//     if(err) return err;
//     if ( data ){
//       console.log('new user data saved -- name, address, linkedIn etc')
//       res.status(201).send(data);
//     } else {
//       console.log('your form data might be trash');
//       res.status(400).send('something is wrong with your data R2D2');
//     }
//   }  
// )};
