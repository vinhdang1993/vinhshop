const express = require('express');
const router = express.Router();
const productscontroller = require('../app/controller/ProductsController')

router.get('/', productscontroller.index) ;
router.get('/id=:id', productscontroller.getId);
router.get('/category=:id', productscontroller.getCategoryId);
router.get('/delete=:id', productscontroller.deleteProduct);
router.post('/createProduct', productscontroller.addProduct);

module.exports = router;