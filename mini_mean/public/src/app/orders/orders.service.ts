import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class OrdersService {

  constructor( private _http: Http) { }




  createOrder(order){
    return this._http.post('/api/orders', order)
    .map( (order: Response) => order.json())
    .toPromise();
  }


  getOrders(){
    return this._http.get('/api/orders')
    .map( (orders: Response) => orders.json())
    .toPromise();
  }





}
