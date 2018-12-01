import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemediosPage } from './remedios';

@NgModule({
  declarations: [
    RemediosPage,
  ],
  imports: [
    IonicPageModule.forChild(RemediosPage),
  ],
})
export class RemediosPageModule {}
