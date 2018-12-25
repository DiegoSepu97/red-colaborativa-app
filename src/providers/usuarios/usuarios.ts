import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DependienteProvider } from '../dependiente/dependiente';
import { Usuario } from '../../models/usuario';

@Injectable()
export class UsuariosProvider {

  id:string;
  usuario: Usuario;


  constructor(public http: HttpClient, private _dependienteProvider: DependienteProvider) {
    console.log('UsuariosProvider Funcionando');
  }

  public async setUsuario(id: string) {
    this.id = id;

    let result = await this.getUsuario(this.id);
    this.usuario = result.usuario;

    let dependientes = this.usuario.dependientes;

    if(dependientes.length > 0) {
      this._dependienteProvider.setDependiente(dependientes[0]._id);
    }
    else {
      dependientes = this.usuario.encargados;
      this._dependienteProvider.setDependiente(dependientes[0]._id);
    }
  }

  public getUsuario(id: string) {
    return this.http.get("https://proyecto-is-beta-1.herokuapp.com/usuarios/" + id).toPromise().then(
      (res: any) => {
        return res;
      }
    );
  }

}
