import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticulosServiceProvider {

  constructor(public http: Http) {

    console.log('Servicio en ejecución');

  }

  public obtenerArticulos() {
    return this.http.get("http://localhost:3000/articulos").pipe(map(res => {
      return res.json();
    }))
  }
}