const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carts = new Schema({
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  price: String,
  img: String,
},
  {
    timestamps: true,
  });
module.exports = mongoose.model('Carts', carts);