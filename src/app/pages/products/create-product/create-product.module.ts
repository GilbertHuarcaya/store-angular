import { CreateProductComponent } from './create-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateProductRoutingModule } from './create-product-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CreateProductModule { }
