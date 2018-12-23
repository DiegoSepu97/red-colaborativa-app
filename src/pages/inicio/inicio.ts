import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { RemediosPage } from '../remedios/remedios';
import { EventosPage } from '../eventos/eventos';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  


  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              private alertCtrl: AlertController,
              private _usuariosProvider: UsuariosProvider) {

  }

  ionViewDidLoad() {
    
    this._usuariosProvider.getUsuario().subscribe(
      (data) => {
        console.log(data['usuario']);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  public abrirEventos() {
    this.navCtrl.setRoot(EventosPage);
  }

  public abrirRemedios() {
    this.navCtrl.setRoot(RemediosPage);
  }
}