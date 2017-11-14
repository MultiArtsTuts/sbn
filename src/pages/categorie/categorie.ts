import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  clientID: any;
  title: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public restProvider: RestProvider,
      public loadingController: LoadingController
    )
  {
    this.item = navParams.get("item");
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Aguarde..."
    });
    loader.present();
    this.restProvider.getCatId(this.item)
    .then(data => {
      this.categories = data;
      console.log(this.title);
      loader.dismiss();
    })
  }

  openClient(clientID){
    this.navCtrl.push(CategorieDetailPage, {clientID: clientID});
  }

}
