import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient) {
    console.log('UsuariosProvider Funcionando');
  }

  public getUsuario(id: string) {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/usuarios/" + id);
  }

}
