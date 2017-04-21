var fistDayRouter = require('express').Router();
var controller = require('./controller.js');

fistDayRouter.get('/test123', controller.testUser );

module.exports = fistDayRouter;