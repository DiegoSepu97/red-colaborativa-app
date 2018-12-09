import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';

@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  apoderado: any;
  cuidadores: any[] = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteServiceProvider) {
    this._dependienteService.getInfoDependiente().subscribe(data => {
      const info = data.dependiente;
      this.apoderado = info.apoderado;
      info.cuidadores.forEach(cuidador => {
        this.cuidadores.push(cuidador);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

}
