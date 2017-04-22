let mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    name: String,
    age: Number
  });

testSchema.methods.myName = function( ){
  var greeting = this.name ? 'Hello my name ' + this.name : "I..... am nameless :("
  console.log(greeting);
}


var testing123 = mongoose.model('Testing123', testSchema);

module.exports = testing123;