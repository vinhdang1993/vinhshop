const Cart = require('../model/Cart.js')
    class CartController {

        index(req,res,next){
            Cart.find({})
            .then((items) => res.json(items))
            .catch(next)
        };
        getCart(req,res,next){
            Cart.find({ userId : req.params.id})
            .then((items) => res.json(items))
            .catch(next)
        };
        deleteCart(req,res,next){
            Cart.deleteOne({ _id : req.params.id })
            .then(console.log('delete cart success !!!'))
            .catch(next)
        };
        destroyCart(req,res,next){

        };
        addCart(req, res, next){
        //     const data = {productId : '611484769783b40d4807047f',
        //                     quantity:1,
        //                     name:'Strawberry',
        //                     price:75,
        //                     img:'product-1.jpg',
        //                     userId:'5fe1b5940af6e54b54f5c2c7',
        // }
        //    const carts = new Cart(data);
        const carts = new Cart(req.body);
           carts.save()
            .then(res.status(200).json({'cart': 'cart is added successfully'}))
            .catch((err) => {
               res.status(400).send("unable to save to database",err);
           });
        }

    }
    module.exports = new CartController  