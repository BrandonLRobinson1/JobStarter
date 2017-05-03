let mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: { type : String , unique : true, required : true },
    password: { type : String, required : true },
    userInfo: {
      name: String,
      address: String,
      relocation: Boolean,
      age: Number,
      phone: Number,
      resume: String,
      coverLetter: String,
      fit: String,
      linkedIn: String,
      gitHub: String,
      authorized: Boolean,
      disability: Boolean,
      gender: String,
      race: String,
      veteran: Boolean,
      linkToVideo: String
    }
  });

userSchema.methods.myName = function( ){
  var greeting = this.email ? 'Hello my email is ' + this.email : "I..... am emailless :("
  console.log(greeting);
}


var User = mongoose.model('User', userSchema);

module.exports = User;