import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CategoriePage } from '../categorie/categorie';

@IonicPage()
@Component({
  selector: 'page-categorie-list',
  templateUrl: 'categorie-list.html',
})
export class CategorieListPage {
  categories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getCategories();
  }

  ionViewDidLoad() {}

  getCategories(){
    this.restProvider.getCategories()
    .then(data => {
      this.categories = data;
    })
  }

  openItem(item){
    this.navCtrl.push(CategoriePage, {item: item})
  }

}
