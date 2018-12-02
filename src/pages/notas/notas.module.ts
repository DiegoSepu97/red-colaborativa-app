import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotasPage } from './notas';
import { FooterComponent } from '../../components/footer/footer';

@NgModule({
  declarations: [
    NotasPage,
    FooterComponent
  ],
  imports: [
    IonicPageModule.forChild(NotasPage)
  ],
})
export class NotasPageModule {}
