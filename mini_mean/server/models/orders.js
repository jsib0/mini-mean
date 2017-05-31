let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let OrdersSchema = new Schema({
  _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: {type: Number, required: true}
}, {timestamps: true})


mongoose.model('Orders', OrdersSchema);
