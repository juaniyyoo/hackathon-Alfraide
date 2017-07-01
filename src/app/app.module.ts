import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ActionSheetController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { RepairmanPage } from '../pages/repairman/repairman';
import { AddobjectPage } from '../pages/addobject/addobject';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    ProductDetailsPage,
    RepairmanPage,
    AddobjectPage
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
    RepairmanPage,
    AddobjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
