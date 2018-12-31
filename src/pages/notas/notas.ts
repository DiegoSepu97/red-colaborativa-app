import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DependienteProvider } from '../../providers/dependiente/dependiente';
import { NuevaNotaPage } from '../nueva-nota/nueva-nota';
import { NotaPage } from '../nota/nota';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  
  notas: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _dependienteProvider: DependienteProvider) {

  }

  ionViewDidLoad() {
    this._dependienteProvider.getNotasByDependiente().subscribe(
      (data: any) => {
        this.notas = data.notas.sort((a,b) => {
          a = new Date(a.stamp_agregada); 
          b = new Date(b.stamp_agregada); 
          return a>b ? -1 : a<b ? 1 : 0;
        });
        console.log(this.notas);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public nuevaNota() {
    this.navCtrl.push(NuevaNotaPage);
  }

  public verNota(id_nota) {
    this.navCtrl.push(NotaPage, {
      id: id_nota
    });
  }
}
