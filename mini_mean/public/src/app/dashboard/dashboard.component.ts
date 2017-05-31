import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../orders/orders.service';
import { CustomerService } from './../customer/customer.service';
import { ProductsService } from './../products/products.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customers: Array<any>;
	orders: Array<any>;
	products: Array<any>;

  constructor(
    private _customersService: CustomerService,
  	private _ordersService: OrdersService,
  	private _productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.getCustomers();
  	this.getProducts();
  	this.getOrders();
  }
    getCustomers(){
    this._customersService.getAllCustomers()
      .then( (customers) => {
        this.customers = customers
        // this.customers.length = 5;
      })
      .catch( (response) => console.log(response))
  }

    getProducts(){
    this._productsService.getProducts()
      .then((products) => this.products = products)
      .catch( (response) => console.log(response) )
  }

    getOrders(){
    this._ordersService.getOrders()
      .then( (orders) => {
        this.orders = orders;
      })
      .catch()
  }
}
