import { Product } from './../../pages/products/interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, DetailsOrder } from '../interfaces/order.interface';
import { Store } from '../interfaces/stores.interface';
import { Category } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiURL = 'https://nestjs-mongo-ghm.herokuapp.com';
  constructor(private http: HttpClient) { }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiURL}/stores`)
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiURL}/categories`)
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiURL}/orders`, order);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiURL}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiURL}/products/${product.productId}`, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiURL}/products/${product.productId}`);
  }

  saveDetailsOrder(details: DetailsOrder): Observable<DetailsOrder> {
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`, details);
  }
}
