const express = require('express');
const router = express.Router();
const userscontrollers = require('../app/controller/UsersController')

router.get('/', userscontrollers.AuthLogin) ;


module.exports = router