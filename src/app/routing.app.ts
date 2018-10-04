/**
 * Created by user on 3/19/18.
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

/*Individual Pages*/
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductsComponent } from './products/products.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ReportsComponent } from './reports/reports.component';

const appRoutes: Routes = [
  { path: '', component: AddcategoryComponent },
  { path: 'productlist', component: ProductsComponent },
  { path: 'addproduct', component: AddproductsComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'report', component: ReportsComponent },

  // otherwise redirect to welcome
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
