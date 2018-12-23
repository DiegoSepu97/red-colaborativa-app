import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient) {
    console.log('UsuariosProvider Funcionando');
  }

  public getUsuario() {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/usuarios/5c0c8deba88d2d1f24da64e7");
  }

}
