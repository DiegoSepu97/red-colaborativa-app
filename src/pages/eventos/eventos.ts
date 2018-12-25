import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { Evento } from '../../models/evento';

@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  id_dependiente: string;
  eventos: Evento[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _dependienteProvider: DependienteProvider) {
  }

  ionViewDidLoad() {
    this._dependienteProvider.getEventosByDependiente().subscribe(
      (data: any) => {
        this.eventos = data.eventos;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
