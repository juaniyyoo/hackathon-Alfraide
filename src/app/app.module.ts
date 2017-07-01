import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { ProductDetailsPage2 } from '../pages/product-details-2/product-details-2';
import { RepairmanPage } from '../pages/repairman/repairman';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    ProductDetailsPage,
    ProductDetailsPage2,
    RepairmanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    ProductDetailsPage,
    ProductDetailsPage2,
    RepairmanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
