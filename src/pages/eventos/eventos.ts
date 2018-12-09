import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependienteServiceProvider } from '../../providers/dependiente-service/dependiente-service';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos: any[] = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _dependienteService: DependienteServiceProvider) {
    this._dependienteService.getInfoDependiente().subscribe(async data => {
      const info = await data.dependiente;
      info.eventos.forEach(evento => {
        this.eventos.push(evento);
      });
      console.log(this.eventos);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
