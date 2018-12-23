import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticuloPage } from '../articulo/articulo';

@Component({
  selector: 'page-ayuda-medica',
  templateUrl: 'ayuda-medica.html',
})
export class AyudaMedicaPage {

  articulos: any[];
  categorias = new Set();
  categoria: string;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaMedicaPage');
  }

  abrirArticulo(cat) {
    this.navCtrl.push(ArticuloPage, {
      categoria: cat
    });
  }
  
}