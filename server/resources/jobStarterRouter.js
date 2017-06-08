let jobStarterRouter = require('express').Router();
let controller = require('./controller.js');

jobStarterRouter.post('/signup', controller.createUser);

jobStarterRouter.post('/login', controller.verifyUser);

jobStarterRouter.post('/update', controller.updateUser);


module.exports = jobStarterRouter;