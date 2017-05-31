import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-orders-new',
  templateUrl: './orders-new.component.html',
  styleUrls: ['./orders-new.component.css']
})
export class OrdersNewComponent implements OnInit {
  @Input() product;
  @Input() customer;
  @Output() newOrderEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  createOrder(order: NgForm){
    this.newOrderEvent.emit(order.value);
    order.reset();
  }

}
