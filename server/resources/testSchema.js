let mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    name: String,
    age: Number
  });



var testing123 = mongoose.model('Testing123', testSchema);

module.exports = testing123;