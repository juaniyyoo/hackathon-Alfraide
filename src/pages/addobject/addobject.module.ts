import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddobjectPage } from './addobject';

@NgModule({
  declarations: [
    AddobjectPage,
  ],
  imports: [
    IonicPageModule.forChild(AddobjectPage),
  ],
  exports: [
    AddobjectPage
  ]
})
export class AddobjectPageModule {}
