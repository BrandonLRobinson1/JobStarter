let mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    // id: mongoose.Schema.Types.ObjectId,
    email: { type : String , unique : true, required : true },
    password: { type : String, required : true },
    userInfo: {
      name: String,
      address: String,
      address2: String,
      relocation: String,
      age: Number,
      phone: Number,
      resume: String,
      coverLetter: String,
      linkedIn: String,
      gitHub: String,
      authorized: String,
      disability: Boolean //,
      // linkToVideo: String
    }
  });

userSchema.methods.myName = function( ){
  var greeting = this.email ? 'Hello my email is ' + this.email : "I..... am emailless :("
  console.log(greeting);
}


var User = mongoose.model('User', userSchema);

module.exports = User;