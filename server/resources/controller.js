let testing123 = require('./testSchema.js');

exports.testUser = function(req, res){

  var employee = new testing123( req.body.data );
  
  employee.save( (err, employee) => {
    
    if (err) { 
      console.error(err) 
    } else {
    console.log('saved');
    employee.myName();
    }

  } );
  res.send('done');
  
};

