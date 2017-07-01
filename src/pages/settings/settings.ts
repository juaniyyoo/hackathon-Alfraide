import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }
  
  users: string = "compte";
  isAndroid: boolean = false;
  
  
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Voulez-vous vraiment supprimer votre profil ?',
      message: 'Votre profil sera supprimé et les données que vous avez enregistrées également, il ne sera plus possible de récupérer votre profil après cette action.',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Action annulé');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            console.log('Compte utilisateur supprimé');
          }
        }
      ]
    });
    confirm.present()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
