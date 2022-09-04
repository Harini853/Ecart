import { Injectable } from '@angular/core';
import { Product } from './product';
import {from} from 'rxjs'
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  products :any
  

  constructor(private httpClient:HttpClient) { 
    
  }
 

  async ProductRegister(){
    let httpHeaders = new HttpHeaders({
      'content-Type':'application/json'
    });
    this.products=await this.httpClient.get('http://localhost:3000/api/products',{headers:httpHeaders}).toPromise()
    console.log(this.products)
    return this.products
  }

}
