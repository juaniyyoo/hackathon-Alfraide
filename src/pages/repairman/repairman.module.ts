import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepairmanPage } from './repairman';

@NgModule({
  declarations: [
    RepairmanPage,
  ],
  imports: [
    IonicPageModule.forChild(RepairmanPage),
  ],
  exports: [
    RepairmanPage
  ]
})
export class RepairmanPageModule {}
