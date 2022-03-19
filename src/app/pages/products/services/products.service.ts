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

  updateStock(productId: string, stock: number): Observable<any> {
    let body = { stock: stock, status: 'Disponible' };
    if (stock === 0 ){
      body = {stock: stock, status: 'Out of Stock'}
    }
    else if(stock < 0){
      body = {
        stock: 0,
        status: 'Out of Stock'
      }
    }
    return this.http.patch<any>(`${this.apiURl}/${productId}`, body);
  }

  createProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURl);
  }

}
