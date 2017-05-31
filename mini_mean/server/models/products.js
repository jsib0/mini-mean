let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: {type: String, required: [true, "Product Name required"]},
  description: {type: String, required: [true, "Product Description Required"]},
  quantity: {type: Number, required: [true, "Product Quantity Required"]}
}, {timestamps: true})

mongoose.model('Product', ProductSchema);
