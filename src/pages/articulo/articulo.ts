import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ArticulosServiceProvider} from '../../providers/articulos-service/articulos-service'

@IonicPage()
@Component({
  selector: 'page-articulo',
  templateUrl: 'articulo.html',
})
export class ArticuloPage {

  categoria: string;
  articulosdif : any[] = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _articulosService: ArticulosServiceProvider) {
    this.categoria = navParams.get('categoria');
    this._articulosService.obtenerArticulos().subscribe(data => {
      let articulos = data.articulos;
      for (let index = 0; index < articulos.length; index++) {
        let categorias = new Set();
        articulos[index].categorias.forEach(element => {
          categorias.add(element)});
        if(categorias.has(this.categoria))
          this.articulosdif.push(articulos[index]);
      };
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloPage');
  }

}
