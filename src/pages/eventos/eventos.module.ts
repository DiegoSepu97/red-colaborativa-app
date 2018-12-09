import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';
import { FooterComponent } from '../../components/footer/footer';

@NgModule({
  declarations: [
    EventosPage,
    FooterComponent
  ],
  imports: [
    IonicPageModule.forChild(EventosPage),
  ],
})
export class EventosPageModule {}
