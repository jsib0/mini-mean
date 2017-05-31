let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CustomerSchema = new Schema({
  name: {type: String, required: [true, "Customer Name required"]},
}, {timestamps: true})


mongoose.model('Customer', CustomerSchema);
