import { IProduct } from './../Models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private httpClient:HttpClient) { }

  getAllData(): Observable<any>{
    return this.httpClient.get("http://localhost:2000/products")
  }

  addProduct(product: IProduct) {
    this.httpClient.post("http://localhost:2000/products", product)
  }
}
