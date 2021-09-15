const express = require('express');
const router = express.Router();
const categoriescontroller = require('../app/controller/CategoriesController')

router.get('/', categoriescontroller.index) ;



module.exports = router;