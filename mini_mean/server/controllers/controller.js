let mongoose = require('mongoose');

let Customer = mongoose.model("Customer");
let Orders = mongoose.model('Orders');
let Product = mongoose.model('Product');



module.exports = {

  createOrder: (req, res) => {
    Product.findOne({_id: req.body.product}, (err, product) => {
      if(req.body.quantity > product.quantity){
        return res.status(500).send("Quantity cannot exceed inventory")
      }
      var order = new Orders(req.body);
      order.save( (err, order) => {
        if(err){
          console.log(err);
          return res.status(500).send("Error saving order in database.")
        } else {
          product.quantity -= req.body.quantity;
          product.save();
          return res.json(order);
        }
      })
    })
  },

  createCustomer: (req, res) => {
    let customer = new Customer(req.body);
    customer.save( (err, response) => {
      if(err){
        let errors =""
        for(let i in err.errors){
          errors += err.errors[i].message + ","
        }
        return res.status(500).send(errors);
      } else {
        return res.json(response);
      }
    })
  },
  getCustomers: (req, res) => {
    Customer.find({}, (err, response) =>{
      if(err){
        let errors =""
        for(let i in err.errors){
          errors += err.errors[i].message + ","
        }
        return res.status(500).send(errors);
      } else {
        return res.json(response);
      }
    })
  },

  createProducts: (req, res) => {
    console.log(req.body)
    let product = new Product(req.body);
    product.save( (err, product) => {
      if(err){
        let errors =""
        for(let i in err.errors){
          errors += err.errors[i].message + ","
        }
        return res.status(500).send(errors);
      }else{
        return res.json(product);
      }
    })
  },

  deleteCustomer: (req, res) => {
    Customer.remove({_id: req.params.id}, (err, response) => {
      if(err){
        let errors =""
        for(let i in err.errors){
          errors += err.errors[i].message + ","
        }
        return res.status(500).send(errors);
      } else {
        return res.json(response);
      }
    })

  },

  getProducts: (req, res) => {
    Product.find({}, (err, products) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }else{
        return res.json(products);
      }
    })
  },

  getOrder: (req, res) => {
    Orders.find({}).populate('_customer').populate('product').exec((err, orders) => {
      if(err){
        let errors=""
        for(let i in err.errors){
          errors += err.errors[i].message + ","
        }
        return res.sendStatus(500).send(err)
      } else {
        return res.json(orders);
      }
  })
}
}
