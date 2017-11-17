import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CategorieDetailPage } from '../categorie-detail/categorie-detail';
import { CategoriePage } from '../categorie/categorie'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  clientID: any;
  clients: any;
  categories: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public loadingController: LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Aguarde..."
    });
    loader.present();
    this.restProvider.getClients()
    .then(data => {
      this.clients = data;
      loader.dismiss();
	})

	this.restProvider.getCategories().then(data => {
		this.categories = data;
	})
  }

  openClient(clientID){
    this.navCtrl.push(CategorieDetailPage, {clientID: clientID});
  }

  openItem(item, title){
    this.navCtrl.push(CategoriePage, {item: item, title: title})
  }

}
