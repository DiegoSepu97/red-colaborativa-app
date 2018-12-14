import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  apoderado: any;
  cuidadores: any[] = new Array;
  id_usuario: string;
  id_dependiente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteServiceProvider, private _usuarioService: UsuarioServiceProvider) {
    this.id_usuario = this._usuarioService.getId();
    this._usuarioService.getUser(this.id_usuario).subscribe(data => {
      this.id_dependiente = data.usuario.dependientes[0]._id;
      this._dependienteService.getInfoDependiente(this.id_dependiente).subscribe(data => {
        const info = data.dependiente;
        this.apoderado = info.apoderado;
        info.cuidadores.forEach(cuidador => {
          this.cuidadores.push(cuidador);
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

}
