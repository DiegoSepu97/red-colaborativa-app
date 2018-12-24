import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RemediosPage } from '../remedios/remedios';
import { EventosPage } from '../eventos/eventos';
import { Dependiente } from '../../models/dependiente';
import { DependienteProvider } from '../../providers/dependiente/dependiente';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  dependiente: Dependiente;
  nombre_dependiente: string = "";
  eventos: any[] = [];
  medicinas: any[] = [];
  apoderado: string;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events,
              private _dependienteProvider: DependienteProvider) {
  }

  ionViewDidLoad() {
    
    this._dependienteProvider.getDependiente().subscribe(
      (data: any) => {
        this.dependiente = data.dependiente;
        this.eventos = this.dependiente.eventos;
        this.medicinas = this.dependiente.medicinas;
        this.apoderado = this.dependiente.apoderado.nombre + " " + this.dependiente.apoderado.apellido;
        this.events.publish('username:changed', this.apoderado);
        this.nombre_dependiente = this.dependiente.nombre + " " + this.dependiente.apellido;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public abrirEventos() {
    this.navCtrl.setRoot(EventosPage);
  }

  public abrirRemedios() {
    this.navCtrl.setRoot(RemediosPage);
  }
}