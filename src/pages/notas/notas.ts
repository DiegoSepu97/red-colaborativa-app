import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { NuevaNotaPage } from '../nueva-nota/nueva-nota';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  
  notas: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _dependienteProvider: DependienteProvider) {

  }

  ionViewDidLoad() {
    this._dependienteProvider.getNotasByDependiente().subscribe(
      (data: any) => {
        this.notas = data.notas; 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public nuevaNota() {
    this.navCtrl.push(NuevaNotaPage);
  }
}
