import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DependienteProvider } from '../../providers/dependiente/dependiente';

@Component({
  selector: 'page-remedios',
  templateUrl: 'remedios.html',
})
export class RemediosPage {

  remedios : string[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _dependienteProvider: DependienteProvider) {
    
  }

  ionViewDidLoad() {
    this._dependienteProvider.getMedicinasByDependiente().subscribe(
      (data: any) => {
        this.remedios = data.medicinas;
      },
      (error) => {
        console.error(error)
      }
    );
  }

}
