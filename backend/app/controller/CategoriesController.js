const Category = require('../model/Category.js')
    class CategoriesController {

        index(req,res,next){
            Category.find({})
            .then((items) => res.json(items))
            .catch(next)
        }

    }
    module.exports = new CategoriesController  

