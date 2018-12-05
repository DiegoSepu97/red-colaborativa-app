import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { ArticuloPage } from '../articulo/articulo';


@IonicPage()
@Component({
  selector: 'page-ayuda-medica',
  templateUrl: 'ayuda-medica.html',
})
export class AyudaMedicaPage {

  url : string; 
  info: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaMedicaPage');
  }

  abrirArticulo() {
    this.navCtrl.push(ArticuloPage);
  }
}
