var fistDayRouter = require('express').Router();
var controller = require('./controller.js');

fistDayRouter.post('/signup', controller.createUser);

fistDayRouter.post('/login', controller.verifyUser);

fistDayRouter.post('/update', controller.updateUser);


// fistDayRouter.post('/logout', controller.logout);


module.exports = fistDayRouter;