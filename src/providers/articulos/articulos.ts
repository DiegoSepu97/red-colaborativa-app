import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticulosProvider {

  constructor(public http: HttpClient) {

    console.log('ArticulosProvider En Funcionamiento');

  }

  public getArticulos() {

    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/articulos");

  }

  public getCategorias() {

    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/articulos?tags=true");

  }

}
