import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  id: string;
  nombre: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private _usuarioService: UsuarioServiceProvider, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  public cambiaUsuario(uid: string) {  //Eliminable
    this.id = uid;
    this.set_id(uid);
    this._usuarioService.getUser(uid).subscribe(async data => {
      const info = await data.usuario;
      this.nombre = info.nombre + " " + info.apellido;
      let alert = this.alertCtrl.create({
        title: 'Nuevo Usuario!',
        subTitle: this.nombre + " " + this.id, 
        buttons: ['Aceptar']
      });
      alert.present();
    });
  }

  private set_id(nuevaid) {
    this._usuarioService.setId(nuevaid);
    this.id = nuevaid;
  }
}