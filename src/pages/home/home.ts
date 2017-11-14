import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CategorieDetailPage } from '../categorie-detail/categorie-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  clientID: any;
  clients: any;

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
  }

  openClient(clientID){
    this.navCtrl.push(CategorieDetailPage, {clientID: clientID});
  }

}
