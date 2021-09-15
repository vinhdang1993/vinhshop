const express = require('express');
const router = express.Router();
const cartcontroller = require('../app/controller/CartController')

router.get('/', cartcontroller.index) ;
router.get('/user=:id', cartcontroller.getCart) ;
router.post('/addcart' , cartcontroller.addCart)
router.get('/deletecart=:id' , cartcontroller.deleteCart)


module.exports = router;