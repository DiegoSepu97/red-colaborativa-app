import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-nueva-nota',
  templateUrl: 'nueva-nota.html',
})
export class NuevaNotaPage {

  nota: string;

  usuario: {

    _id: string;
    nombre: string;
    apellido: string;

  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  public nuevaNota() {
    console.log(this.nota);
    console.log(this.usuario);
  }

}
