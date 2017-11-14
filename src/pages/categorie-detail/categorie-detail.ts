import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categorie-detail',
  templateUrl: 'categorie-detail.html',
})
export class CategorieDetailPage {
  clientID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clientID = navParams.get('clientID');
    console.log('Cliente name: ' + this.clientID.title);
  }

}
