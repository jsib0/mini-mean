import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() customersGoingIn;
  @Output() deleteCustomerEvent = new EventEmitter();
  customerFilter: string;
  constructor() { }

  ngOnInit() {
  }

  deleteCustomer(id){
    this.deleteCustomerEvent.emit(id);
  }

}
