var controller = require('../controllers/controller');

module.exports = app => {
  app.get('/api/products', controller.getProducts);
  app.post('/api/products', controller.createProducts);
  app.get('/api/customers', controller.getCustomers);
  app.post('/api/customers', controller.createCustomer);
  app.delete('/api/customers/:id', controller.deleteCustomer);
  app.post('/api/orders', controller.createOrder);
  app.get('/api/orders', controller.getOrder);

}
