import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MaterialModule } from './../../material.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MaterialModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ProductsModule { }
