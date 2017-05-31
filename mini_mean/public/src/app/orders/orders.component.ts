import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { ProductsService } from './../products/products.service';
import { CustomerService } from './../customer/customer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  products: Array<any>;
  customers: Array<any>;
  order: Array<any>;


  constructor( private _ordersService: OrdersService,
  private _productsService: ProductsService,
  private _customerService: CustomerService ) { }




  ngOnInit() {
    this.getCustomers();
    this.getProducts();
    this.getOrders();
  }

  getCustomers(){
    this._customerService.getAllCustomers()
    .then( (customer) => this.customers = customer )
    .catch( (response) => console.log("Error in fetchin orders " + response))
  }

  getProducts(){
    this._productsService.getProducts()
    .then( (product) => this.products = product)
    .catch( (response) => console.log("Error order comp: " + response))
  }

  createOrderInOrdersComponent(order){
    this._ordersService.createOrder(order)
    .then( () => {
      this.getOrders();
    })
    .catch( (response) => console.log("Error create order" + response))
  }

  getOrders(){
    this._ordersService.getOrders()
    .then( (orders) => this.order = orders)
    .catch( (response) => console.log("Error get order" + response))
  }



}
