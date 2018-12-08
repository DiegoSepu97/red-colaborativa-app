import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { ArticuloPage } from '../articulo/articulo';
import { ArticulosServiceProvider } from '../../providers/articulos-service/articulos-service'


@IonicPage()
@Component({
  selector: 'page-ayuda-medica',
  templateUrl: 'ayuda-medica.html',
})
export class AyudaMedicaPage {

  articulos: any[];
  categorias = new Set();
  categoria: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private _articulosService: ArticulosServiceProvider) {
    
    this._articulosService.obtenerArticulos().subscribe(async data => {
      const info = await data;
      this.articulos = info.articulos;
      for (let i = 0; i < this.articulos.length; i++) {
        for (let j = 0; j < this.articulos[i].categorias.length; j++) {
          this.categorias.add(this.articulos[i].categorias[j]);
        }
      };
    });
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