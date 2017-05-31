import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from './../customer.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {
  @Output() newCustomerEvent = new EventEmitter();

  constructor( private _customerService: CustomerService) { }

  ngOnInit() {
  }

  createCustomer(formData: NgForm){
    this.newCustomerEvent.emit(formData.value);
    formData.reset();
  }

}
