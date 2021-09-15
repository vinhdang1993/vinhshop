const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const users = new Schema({
  isAdmin: Boolean,
  name: String,
  password: String,
  email: String
  
},
  {
    timestamps: true,
  });
module.exports = mongoose.model('Users', users);