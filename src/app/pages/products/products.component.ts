import {LiveAnnouncer} from '@angular/cdk/a11y';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductsService } from './services/products.service';
import { switchMap, tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products!: Product[];
  displayedColumns: string[] = ['created', 'name', 'price', 'stock', 'status'];

  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatSort) sort!: MatSort;

  isDelivery = true
  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService,private dataSvc: DataService, private router: Router) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
      .pipe(
        tap((products: Product[]) => this.products = products),
        tap((products: Product[]) => this.dataSource = new MatTableDataSource(products))
      )
      .subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;

        this.dataSource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'created':  return new Date(item.createdAt);
            default: return item[property];
          }

        };

      });
  }

  onPickupOrDelivery(value: boolean): void {
    this.isDelivery = value;
  }

  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }

  deleteProduct(product: Product): void {
    console.log('To Delete', product);
    this.dataSvc.deleteProduct(product)
      .pipe(
        tap((res) => console.log('Product ->', res)),
        tap(()=>this.ngOnInit())
      )
      .subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort: Sort) { this.dataSource.sort = this.sort; }
}
