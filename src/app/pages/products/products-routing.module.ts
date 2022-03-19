import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
{
  path: 'create-product', loadChildren: () =>
    import('./create-product/create-product.module').then(m => m.CreateProductModule)
},
{
  path: 'edit-product', loadChildren: () =>
    import('./edit-product/edit-product.module').then(m => m.EditProductModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
