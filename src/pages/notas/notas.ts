import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  notas: any[] = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteServiceProvider) {
    this._dependienteService.getInfoDependiente().subscribe(async data => {
      const info = await data.dependiente;
      info.notas.forEach(nota => {
        this.notas.push(nota);  
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

}
