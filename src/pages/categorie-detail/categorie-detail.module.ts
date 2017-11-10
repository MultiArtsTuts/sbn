import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorieDetailPage } from './categorie-detail';

@NgModule({
  declarations: [
    CategorieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CategorieDetailPage),
  ],
})
export class CategorieDetailPageModule {}
