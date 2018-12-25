import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DependienteProvider } from '../../providers/dependiente/dependiente';


@Component({
  selector: 'page-accesos-rapidos',
  templateUrl: 'accesos-rapidos.html',
})
export class AccesosRapidosPage {

  contactos: any[] = [];
  lugares: any[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteProvider: DependienteProvider) {

  }

  ionViewDidLoad() {
    this._dependienteProvider.getContactosByDependiente().subscribe(
      (data: any) => {
        this.contactos = data.contactos;
      },
      (error) => {
        console.error(error);
      }
    );

    this._dependienteProvider.getLugaresByDependiente().subscribe(
      (data: any) => {
        this.lugares = data.lugares;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}