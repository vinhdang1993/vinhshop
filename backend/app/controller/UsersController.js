const users = require('../model/User')
class UsersController {
  AuthLogin(req, res, next){
    users.find({})
    .then((items)=> res.json(items))
    .catch(next)
  }  
}


module.exports = new UsersController