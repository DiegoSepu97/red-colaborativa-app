import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { Articulo } from '../../models/articulos';

@Component({
  selector: 'page-articulo',
  templateUrl: 'articulo.html',
})
export class ArticuloPage {

  categoria: String;
  articulos: Articulo[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _articulosProvider: ArticulosProvider) {

  }

  ionViewDidLoad() {
    
    this.categoria = this.navParams.get('categoria');
    
    this._articulosProvider.getArticulos().subscribe(
      (data) => {
          const info = data['articulos'];
          info.forEach(articulo => {
            if(articulo['categorias'].includes(this.categoria)) this.articulos.push(articulo);
        });
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
