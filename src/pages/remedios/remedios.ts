import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';

@IonicPage()
@Component({
  selector: 'page-remedios',
  templateUrl: 'remedios.html',
})
export class RemediosPage {

  remedios : string[] = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteServiceProvider) {
    this._dependienteService.getInfoDependiente().subscribe(async data => {
      const info = await data.dependiente;
      info.medicinas.forEach(medicina => {
        this.remedios.push(medicina);
      });
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemediosPage');
  }

}
