import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { NotasPage } from '../notas/notas';

@Component({
  selector: 'page-nueva-nota',
  templateUrl: 'nueva-nota.html',
})
export class NuevaNotaPage {

  textoNota: string;
  tipoNota: string;

  usuario: {
    _id: string;
    nombre: string;
    apellido: string;

  } = { 
    _id: "",
    nombre: "",
    apellido: ""
  };

  info: {
    data: {
      autor: {
        _id: string;
        nombre: string;
        apellido: string;
      };
      texto: string;
      tipo: string;
    }
  } = {
    data: {
      autor: {
        _id: "",
        nombre: "",
        apellido: ""
      },
      texto: "",
      tipo: ""
    }
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private _usuarioProvider: UsuariosProvider, private _dependienteProvider: DependienteProvider) {
  }

  ionViewDidLoad() {
    this.usuario._id = this._usuarioProvider.usuario._id;
    this.usuario.nombre = this._usuarioProvider.usuario.nombre;
    this.usuario.apellido = this._usuarioProvider.usuario.apellido;
  }

  public nuevaNota() {

    this.info.data.autor = this.usuario;
    this.info.data.texto = this.textoNota;
    this.info.data.tipo = this.tipoNota;
    this._dependienteProvider.postNota(this.info).subscribe(
      (data) => {
        // console.log(data);
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.navCtrl.setRoot(NotasPage);
      }
    );
  }
}
