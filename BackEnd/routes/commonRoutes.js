const express = require('express');
const router = express.Router();

const joiSchemaValidation = require('../middleware/joiSchemaValidation');

const userSchema = require('../apiSchema/userSchema');

const userController = require('../controller/userController');

router.post('/signup',
    joiSchemaValidation.validateBody(userSchema.signupUserSchema),
    userController.signupUser
);

router.post('/login',
    joiSchemaValidation.validateBody(userSchema.loginUserSchema),
    userController.loginUser
);

module.exports = router