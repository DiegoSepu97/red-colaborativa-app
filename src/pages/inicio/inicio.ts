import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RemediosPage } from '../remedios/remedios';
import { EventosPage } from '../eventos/eventos';
import { Dependiente } from '../../models/dependiente';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { Usuario } from '../../models/usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  dependiente: Dependiente;
  usuario: Usuario;
  eventos: any[] = [];
  medicinas: any[] = [];
  nombre_dependiente: string;
  nombre_usuario : string;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events,
              private _dependienteProvider: DependienteProvider,
              private _usuarioProvider: UsuariosProvider) {
  }

  ionViewDidLoad() {
    this._dependienteProvider.getDependiente().subscribe(
      (data: any) => {
        this.dependiente = data.dependiente;
        this.eventos = this.dependiente.eventos;
        this.medicinas = this.dependiente.medicinas;
        this.usuario = this._usuarioProvider.usuario;
        this.nombre_usuario = this.usuario.nombre + ' ' + this.usuario.apellido;
        this.events.publish('username:changed', this.nombre_usuario);
        this.nombre_dependiente = this.dependiente.nombre + ' ' + this.dependiente.apellido;
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