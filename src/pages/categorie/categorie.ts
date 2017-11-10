import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { CategorieDetailPage } from '../categorie-detail/categorie-detail';


@IonicPage()
@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
})
export class CategoriePage {
  categories: any;
  item: any;
  clientID: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    this.getCatId(this.item)
  }

  getCatId(item){
    this.restProvider.getCatId(this.item)
    .then(data => {
      this.categories = data;
      console.log(this.item);
    })
  }

  openClient(clientID){
    this.navCtrl.push(CategorieDetailPage, {clientID: clientID});
  }

}
