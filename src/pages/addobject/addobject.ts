import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AddobjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addobject',
  templateUrl: 'addobject.html',
})
export class AddobjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  public event = {
    month: '2005-07-19',
    timeStarts: '09:43',
    timeEnds: '1990-02-20'
  }
  
  public garantie = {
    month: '2007-07-19',
    timeStarts: '09:43',
    timeEnds: '2007-07-19'
  }
  
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Ajouter votre objet ?',
      message: 'Vous êtes sur le point d’ajouter votre objet, vous pourrez toujours enrichir les informations plus tard.',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddobjectPage');
  }

}
