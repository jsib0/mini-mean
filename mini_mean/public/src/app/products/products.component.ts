import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any>;
  errors: any;

  constructor( private _productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts()
    .then( (product) => this.products = product )
    .catch( (response) => console.log("Error on in products component:", response))

  }

  createProduct(formData){
    this._productService.createProduct(formData)
    .then( () => {
      this.getProducts();
    })
    .catch( (err) => this.errors=err._body.split(",")
  )}




}
