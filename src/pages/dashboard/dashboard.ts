import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { ProductDetailsPage } from '../product-details/product-details';
import { AddobjectPage } from '../addobject/addobject';
import { ProductDetailsPage2 } from '../product-details-2/product-details-2';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  entryComponents: [ SettingsPage, ProductDetailsPage, AddobjectPage, ProductDetailsPage2 ]
})
export class DashboardPage {
  settingsPage = SettingsPage;
  productDetailsPage = ProductDetailsPage;
  
  addObjectPage = AddobjectPage;
  productDetailsPage2 = ProductDetailsPage2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
