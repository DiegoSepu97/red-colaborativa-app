import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';

@IonicPage()
@Component({
  selector: 'page-accesos-rapidos',
  templateUrl: 'accesos-rapidos.html',
})
export class AccesosRapidosPage {

  contactos: any[] = new Array;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependientesService: DependienteServiceProvider) {
    this._dependientesService.getInfoDependiente().subscribe(async data => {
      const info = await data.dependiente;
      info.contactos.forEach(contacto => {
        this.contactos.push(contacto);
      });
      info.lugares.forEach(contacto => {
        this.contactos.push(contacto);
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesosRapidosPage');
  }

}