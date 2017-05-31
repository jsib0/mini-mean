import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Array<any>;
  errors: any;
  constructor( private _customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this._customerService.getAllCustomers()
    .then ( (customers) => this.customers = customers)
    .catch( (response) => console.log("Response on getting all customers" + response))
  }

  createCustomer(formData){
    this._customerService.createCustomer(formData)
    .then( () => {
      this.getAllCustomers();
    })
    .catch( (err) => this.errors = err._body.split(",") )
  }

  deleteCustomer(id){
    this._customerService.deleteCustomer(id)
    .then( (res) => {
      this.getAllCustomers();
    })
    .catch( () => console.log("Something went wrong with deleting customer"))
  }
}
