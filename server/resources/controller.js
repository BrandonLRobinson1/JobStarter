let testing123 = require('./testSchema.js');

exports.testUser = function(req, res){
  
  console.log('yo');
  // var employee = new testing123(
  //   req.body 
  //   );

  var employee = new testing123({
    name: 'joe',
    age: 100
  });
  
  employee.save( (err, employee) => {

    if (err) { 
      console.error(err) 
    } else {
    console.log('saved');
    employee.myName();
    }

  } );

  res.send( 'post' );
  // res.send( employee );
  // res.send( req.body );
};

