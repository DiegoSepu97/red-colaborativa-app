import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { InicioPage } from '../inicio/inicio';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private afauth: AngularFireAuth, 
              private alertCtrl: AlertController,
              private _dependienteProvider: DependienteProvider,
              private _usuarioProvider: UsuariosProvider) {
  }

  alerta(user, msj) {
    const alert = this.alertCtrl.create({
      title: user,
      subTitle: msj,
      buttons: [{
        text: 'OK',
        handler: () => {
          this._usuarioProvider.setUsuario("5c0c8deaa88d2d1f24da64ad").then(() => {
            this.navCtrl.setRoot(InicioPage);
          })
        }
      }]
    });
    alert.present();
   }

  logIn() {
    this.afauth.auth.signInWithEmailAndPassword(this.correo, this.password).then( data => {

      this.alerta('Has Ingresado Correctamente', this.afauth.auth.currentUser.email);

    }).catch( error => {
      this.alerta('Error!', error.message);
    })
  }

}
