import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from './../products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter();
  constructor( private _productsService: ProductsService ) { }

  ngOnInit() {
  }

  createProduct(formData: NgForm){
    this.newProductEvent.emit(formData.value);
    formData.reset();
  }

}
