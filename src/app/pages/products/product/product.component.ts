import { tap } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCartClick = new
  EventEmitter<Product>();
  @Output() deleteAProduct = new
  EventEmitter<Product>();
  @Output() updateAllProducts = new
  EventEmitter<Product>();
  isEdit = false

  onEdit(product: Product): void {
    this.product = product
    console.log(product)
    this.updateAllProducts.emit()
  }

  onClick(): void {
    this.product = {...this.product, stock: this.product.stock -= 1};
    this.addToCartClick.emit(this.product)
  }

  onClickEdit(): void {
    this.isEdit = !this.isEdit;
  }

  onClickDelete(): void{
    this.deleteAProduct.emit(this.product)
  }

}
