import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { RemediosPage } from '../remedios/remedios';
import { EventosPage } from '../eventos/eventos';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  id: string;
  nombre: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  public abrirEventos() {
    this.navCtrl.setRoot(EventosPage);
  }

  public abrirRemedios() {
    this.navCtrl.setRoot(RemediosPage);
  }
}