import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DependienteProvider {

  id_dependiente: string;

  constructor(public http: HttpClient) {
    console.log('DependienteProvider Funcionando');
  }

  public getDependiente() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente);
  }

  public setDependiente(id: string) {
    this.id_dependiente = id;
  }

  public getEventosByDependiente() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente + "/eventos");
  }

  public getMedicinasByDependiente() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente + "/medicinas");
  }

  public getNotasByDependiente() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente + "/notas")
  }

  public getContactosByDependiente() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente + "/contactos");
  }

  public getLugaresByDependiente() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente + "/lugares");
  }

  public postNota(nota) {
    let body = JSON.stringify(nota);
    let headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    return this.http.post("https://proyecto-is-beta-1.herokuapp.com/dependientes/" + this.id_dependiente + "/notas", body, { headers });
  }

}
