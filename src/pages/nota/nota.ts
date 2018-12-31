import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { Usuario } from '../../models/usuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { NotasPage } from '../notas/notas';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {

  id_nota: string; 
  nota: any;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteProvider, private _usuarioProvider: UsuariosProvider, private alertCtrl: AlertController) {
    this.id_nota = this.navParams.get('id');
    
    this.usuario._id = this._usuarioProvider.usuario._id;
    this.usuario.nombre = this._usuarioProvider.usuario.nombre;
    this.usuario.apellido = this._usuarioProvider.usuario.apellido;
    
    this._dependienteService.getNotaById(this.id_nota).subscribe(
      (data: any) => {
        this.nota = data.registro;
        this.textoNota = this.nota.texto;
        this.tipoNota = this.nota.tipo;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NotaPage');
  }

  public guardarNota(id_nota) {
    this.info.data.autor = this.usuario;
    this.info.data.texto = this.textoNota;
    this.info.data.tipo = this.tipoNota;

    this._dependienteService.putNotaById(this.info, id_nota).subscribe(
      (data: any) => {

      },
      (error) => {
        console.error(error);
      },
      () => {
        this.navCtrl.setRoot(NotasPage);
      }
    )
    console.log(id_nota);
  }

  alerta(id_nota) {
    const alert = this.alertCtrl.create({
      title: "Confirmación",
      subTitle: "Está seguro que desea eliminar la nota?",
      buttons: [{
        text: 'Si',
        handler: () => {
          this._dependienteService.deleteNotaById(id_nota).subscribe(
            (data) => {

            },
            (error) => {
              console.error(error)
            },
            () => {
              this.navCtrl.setRoot(NotasPage);
            }
          )
          }
        },
      {
        text: 'No'
      }]
    });
    alert.present();
  }


  public borrarNota(id_nota) {

    this.alerta(id_nota);

  }

}
