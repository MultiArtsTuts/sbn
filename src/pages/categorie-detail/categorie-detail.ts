import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategorieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorie-detail',
  templateUrl: 'categorie-detail.html',
})
export class CategorieDetailPage {
  clientID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clientID = navParams.get('clientID');
    console.log('Cliente name: ' + this.clientID.name);
  }

  ionViewDidLoad() {
    console.log(this.clientID);
  }

}
