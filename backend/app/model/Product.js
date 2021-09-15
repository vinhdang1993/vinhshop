const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const products = new Schema({
  name: String,
  price: String,
  img: String,
  description: String,
  categoryId: mongoose.Schema.Types.ObjectId,
},
  {
    timestamps: true,
  });
module.exports = mongoose.model('Products', products);