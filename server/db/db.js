let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jobStarter');
mongoose.Promise = global.Promise; // Mongoose now has access to ES6 promises

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('mongoose connected');
});

module.exports = db;
