import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@IonicPage()
@Component({
  selector: 'page-remedios',
  templateUrl: 'remedios.html',
})
export class RemediosPage {

  id_usuario: string;
  id_dependiente: string;
  remedios : string[] = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteServiceProvider, private _usuarioService: UsuarioServiceProvider) {
    this.id_usuario = this._usuarioService.getId();
    this._usuarioService.getUser(this.id_usuario).subscribe(data => {
      this.id_dependiente = data.usuario.dependientes[0]._id;
      this._dependienteService.getInfoDependiente(this.id_dependiente).subscribe(async data => {
        const info = await data.dependiente;
        info.medicinas.forEach(medicina => {
          this.remedios.push(medicina);
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemediosPage');
  }

}
