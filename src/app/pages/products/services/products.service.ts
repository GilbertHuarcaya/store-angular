import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURl = 'https://nestjs-mongo-ghm.herokuapp.com/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURl);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { "stock": stock };
    return this.http.patch<any>(`${this.apiURl}/${productId}`, body);
  }


}
