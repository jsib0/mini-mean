import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class ProductsService {

  constructor( private _http: Http,) { }


  getProducts(){
    return this._http.get('/api/products')
    .map( (products) => products.json())
    .toPromise()
  }

  createProduct(data){
    return this._http.post('/api/products/', data)
    .map( (user: Response) => user.json())
    .toPromise()
  }

}
