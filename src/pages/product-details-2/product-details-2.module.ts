import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage2 } from './product-details-2';

@NgModule({
  declarations: [
    ProductDetailsPage2,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage2),
  ],
  exports: [
    ProductDetailsPage2
  ]
})
export class ProductDetailsPage2Module {}
