var fistDayRouter = require('express').Router();
var controller = require('./controller.js');

// fistDayRouter.get('/test123', controller.testUser );
fistDayRouter.post('/signup', controller.createUser);

fistDayRouter.post('/login', controller.verifyUser);

module.exports = fistDayRouter;