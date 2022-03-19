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
  isEdit = false

  onEdit(): void {
    console.log(this.product)
    this.isEdit = !this.isEdit;
  }

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }

  onClickEdit(): void {
    this.onEdit()
  }

  onClickDelete(): void{
    this.deleteAProduct.emit(this.product)
  }

}
