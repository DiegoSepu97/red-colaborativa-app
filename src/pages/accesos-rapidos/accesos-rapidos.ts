import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@IonicPage()
@Component({
  selector: 'page-accesos-rapidos',
  templateUrl: 'accesos-rapidos.html',
})
export class AccesosRapidosPage {

  contactos: any[] = new Array;
  id_usuario: string;
  id_dependiente: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependientesService: DependienteServiceProvider, private _usuarioService: UsuarioServiceProvider) {
    this.id_usuario = this._usuarioService.getId();
    this._usuarioService.getUser(this.id_usuario).subscribe(data => {
      this.id_dependiente = data.usuario.dependientes[0]._id;
      this._dependientesService.getInfoDependiente(this.id_dependiente).subscribe(async data => {
        const info = await data.dependiente;
        info.contactos.forEach(contacto => {
          this.contactos.push(contacto);
        });
        info.lugares.forEach(contacto => {
          this.contactos.push(contacto);
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesosRapidosPage');
  }

}