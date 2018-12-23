import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticuloPage } from '../articulo/articulo';
import { ArticulosProvider } from '../../providers/articulos/articulos';


@Component({
  selector: 'page-ayuda-medica',
  templateUrl: 'ayuda-medica.html',
})
export class AyudaMedicaPage {

  categorias: String[];

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _articulosProvider: ArticulosProvider) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AyudaMedicaPage');
    this._articulosProvider.getCategorias().subscribe(
      (data) => {
        this.categorias = data['categorias'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

  abrirArticulo(cat) {
    this.navCtrl.push(ArticuloPage, {
      categoria: cat
    });
  }
  
}