
const Product = require('../model/Product');
// const { muitipleMongooseToObject,mongooseToObject } = require('../../until/mongoose');
class ProductsController {

    // [get all] products 
    index(req, res, next) {
        Product.find({})
            .then(products => {
                res.json(products)
            })
            .catch(next);
    }


    //    [get id] news/detail/id
    getId(req, res, next) {
        Product.findOne({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(next);
    }

    //   [get categoryId]
    getCategoryId(req, res, next) {
        Product.find({ categoryId: req.params.id })
            .then(products => res.json(products))
            .catch(next);
    }


    // add product
    addProduct(req, res) {
        // const data ={
        //     name:'test',
        //     price:'test',
        //     img:'test',
        //     description:'test',
        //     categoryId:'61277d933c6582b718e619a2',
        // }
        
        // const products = new Product(data)
        const products = new Product(req.body);
        // console.log(req.body)
        products.save()
            .then(res.status(200).json({'product': 'product is added successfully'}))
            .catch((err) => {
                res.status(400).send("unable to save to database",err);
            });
    }


    // delete product:id
    deleteProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(console.log('delete product success !!!'))
            .catch(next)
    }


    // [get] news/detail/id
    //     show(req,res,next){
    //         // res.send('detail ' + req.params.slug);
    //         // res.render('productDetail')
    //         Product.findOne({ _id: req.params.id })
    //         .then(product => 
    //             res.render('productDetail', { product : mongooseToObject(product) }))
    //         .catch(next);
    //   }
    // create(req,res){
    //     res.render('create');
    // }

    //     store(req, res, next){

    //         const news = new News(req.body);
    //         news.save()
    //              .then(()=> res.redirect('/'))
    //              .catch(next);
    //     }
    //     edit(req, res, next){
    //         res.render('edit')

    //     }




}
module.exports = new ProductsController;