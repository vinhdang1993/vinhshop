const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const categories = new Schema({
  name: String,
},
  {
    timestamps: true,
  });
module.exports = mongoose.model('Categories', categories);