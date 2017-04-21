let testing123 = require('./testSchema.js');

exports.testUser = function(req, res){
  console.log('yo');

  var employee = new testing123({
    name: 'mike',
    age: 33
  })

  console.log(employee);
  //save employee
};