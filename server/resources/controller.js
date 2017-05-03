let User = require('./testSchema.js');

exports.testUser = function(req, res){

  var newUser = new User( req.body );
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

