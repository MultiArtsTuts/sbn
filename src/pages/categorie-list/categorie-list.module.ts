import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorieListPage } from './categorie-list';

@NgModule({
  declarations: [
    CategorieListPage,
  ],
  imports: [
    IonicPageModule.forChild(CategorieListPage),
  ],
})
export class CategorieListPageModule {}
