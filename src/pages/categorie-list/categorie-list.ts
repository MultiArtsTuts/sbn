import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CategoriePage } from '../categorie/categorie';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-categorie-list',
  templateUrl: 'categorie-list.html',
})
export class CategorieListPage {
  categories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public loadingController: LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Aguarde..."
    });
    loader.present();
    this.restProvider.getCategories()
    .then(data => {
      this.categories = data;
      loader.dismiss();
    })
  }

  openItem(item, title){
    this.navCtrl.push(CategoriePage, {item: item, title: title})
  }

  toHome(){
	  this.navCtrl.setRoot(HomePage)
  }

}
