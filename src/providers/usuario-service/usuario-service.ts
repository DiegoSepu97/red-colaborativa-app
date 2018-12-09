import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuarioServiceProvider {

  user_id: string = "5c0529a2d304af12048b86bf";

  constructor(public http: Http) {
    console.log('Hello UsuarioServiceProvider Provider');
  }

  public getId() {
    return this.user_id;
  }

  public setId( nuevo_id: string ) {
    this.user_id = nuevo_id;
  }

  public getUser(uid: string) {
    return this.http.get("https://proyecto-is-alpha-0-1.herokuapp.com/usuarios?id=" + uid).pipe(map(res => {
      return res.json();
    }));
  }
}
