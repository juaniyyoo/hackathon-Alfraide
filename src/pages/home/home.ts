import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents:[ DashboardPage ]
})
export class HomePage {
  dashboardPage = DashboardPage;

  constructor(public navCtrl: NavController) {

  }

}
