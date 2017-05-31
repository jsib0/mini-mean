import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class CustomerService {

  constructor( private _http: Http) { }



  getAllCustomers(){
    return this._http.get('/api/customers')
    .map( (customers) => customers.json())
    .toPromise()

  }

  createCustomer(formData){
    return this._http.post('/api/customers', formData)
    .map( (user: Response ) => user.json())
    .toPromise()
  }

  deleteCustomer(id){
    return this._http.delete('/api/customers/' +id )
    .map( (response: Response) => response.json())
    .toPromise();
  }

}
