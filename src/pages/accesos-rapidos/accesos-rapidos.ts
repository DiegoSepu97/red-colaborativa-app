import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-accesos-rapidos',
  templateUrl: 'accesos-rapidos.html',
})
export class AccesosRapidosPage {


  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesosRapidosPage');
  }

}