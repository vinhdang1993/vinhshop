const productsRouter = require('./products')
const categoriesRouter = require('./categories')
const usersRouter = require('./users')
const cartRouter = require('./cart')
const route = (app) =>{
    app.get('/', (req, res) => {
        res.send('API is running');
      })
    app.use(`/api/cart`,cartRouter)
    app.use('/api/products',productsRouter)
    app.use('/api/categories',categoriesRouter)
    app.use('/api/users',usersRouter)
}
module.exports = route;