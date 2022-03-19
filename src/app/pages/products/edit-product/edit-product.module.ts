import { EditProductComponent } from './edit-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EditProductRoutingModule } from './edit-product-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EditProductRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class EditProductModule { }
