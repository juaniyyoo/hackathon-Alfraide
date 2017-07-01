import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { RepairmanPage } from '../repairman/repairman';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
  entryComponents: [ SettingsPage, RepairmanPage ]
})
export class ProductDetailsPage {
  settingsPage = SettingsPage;
  repairmanPage = RepairmanPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
