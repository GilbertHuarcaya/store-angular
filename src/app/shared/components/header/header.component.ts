
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar class="main-header" color="primary">
    <a [routerLink]="['/']">My Store</a>
    <mat-card-actions>
    <button
    mat-flat-button
    color="primary"
    (click)="createProduct()">
      Add new Product
      <mat-icon>create</mat-icon>
    </button>
  </mat-card-actions>
    <app-cart class="shopping-cart" (click)="goToCheckout()"></app-cart>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  createProduct(): void {
    this.router.navigate(['/products/create-product'])
  }
}
