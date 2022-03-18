import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { Category } from '../../../shared/interfaces/categories.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @Input() product!: Product;

  categories: Category[] = []

  constructor(private dataSvc: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories()
  }

  onSubmit({ value: formData }: NgForm): void {
    console.log('Guardar', formData);
    const data: Product = {
      ...formData,
      status: 'Disponible',
      categoryId: formData.category,
    };
    this.dataSvc
      .saveProduct(data)
      .pipe(
        tap((res) => console.log('Product ->', res)),
        tap(() => this.router.navigate(['/products']))
      )
      .subscribe();
  }

  private getCategories(): void {
    this.dataSvc.getCategories()
      .pipe(
        tap((categories: Category[]) => this.categories = categories))
      .subscribe()
  }

}
