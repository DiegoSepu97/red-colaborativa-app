import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemediosPage } from './remedios';
import { FooterComponent } from '../../components/footer/footer';

@NgModule({
  declarations: [
    RemediosPage,
    FooterComponent
  ],
  imports: [
    IonicPageModule.forChild(RemediosPage),
  ],
})
export class RemediosPageModule {}
