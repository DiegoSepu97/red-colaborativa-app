import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DependienteServiceProvider {

  constructor(public http: Http) {
    console.log('Servicio en ejecución');
  }

  public getInfoDependiente(id) {
    return this.http.get("https://proyecto-is-alpha-0-1.herokuapp.com/dependientes?id=" + id).pipe(map(res => {
      return res.json();
    }))
  }
}
