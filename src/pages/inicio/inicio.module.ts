import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';
import { FooterComponent } from '../../components/footer/footer';

@NgModule({
  declarations: [
    InicioPage,
    FooterComponent
  ],
  imports: [
    IonicPageModule.forChild(InicioPage),
  ],
})
export class InicioPageModule {}
