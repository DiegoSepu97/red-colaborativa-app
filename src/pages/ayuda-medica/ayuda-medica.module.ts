import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AyudaMedicaPage } from './ayuda-medica';
import { FooterComponent } from '../../components/footer/footer';

@NgModule({
  declarations: [
    AyudaMedicaPage,
  ],
  imports: [
    IonicPageModule.forChild(AyudaMedicaPage),
  ],
})
export class AyudaMedicaPageModule {}
