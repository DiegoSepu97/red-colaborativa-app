import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth: AngularFireAuth, private alertCtrl: AlertController) {
  }

  alerta(user, msj) {
    const alert = this.alertCtrl.create({
      title: user,
      subTitle: msj,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.setRoot(InicioPage);
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
