import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private apiURL = 'http://localhost:4400/';
  private bucketApi = 'bucket/';
  private apiKey = '405gzn1kdhfs7lc';

  constructor(private http: HttpClient) {}

  getProducts() {
    // const url = http://localhost:4400/bucket/5f2a67027f21be1f4ff9383a/data

    const myproduct = '5f2a67027f21be1f4ff9383a/data';

    const url = this.apiURL + this.bucketApi + myproduct;

    return this.http.get<Product[]>(url, {
      headers: new HttpHeaders().set('Authorization', 'APIKEY ' + this.apiKey),
    });
  }

  addProduct(products?: Product): Observable<Product> {
    //console.log(products);
    const myproduct = '5f2a67027f21be1f4ff9383a/data';

    const url = this.apiURL + this.bucketApi + myproduct;

    return this.http.post<Product[]>(url, products, {
      headers: new HttpHeaders().set('Authorization', 'APIKEY ' + this.apiKey),
    });
  }

  removeProduct(id: string) {
    const myproduct = '5f2a67027f21be1f4ff9383a/data/' + id;

    const url = this.apiURL + this.bucketApi + myproduct;

    return this.http.delete<Product[]>(url, {
      headers: new HttpHeaders().set('Authorization', 'APIKEY ' + this.apiKey),
    });
  }
}
