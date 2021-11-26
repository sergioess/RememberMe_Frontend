import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';
  items: Usuario[] = [];

  getUsuarios(): Observable<Usuario[]> {
    // console.log(this.http.get<Usuario[]>(this.url + '/usuario'))
    // return this.items;
    return this.http.get<Usuario[]>(this.url + 'usuarios');

  }

  getUsuarioByCorreo(email: string): Observable<Usuario[]> {
    console.log(email);
    return this.http.get<Usuario[]>(this.url + 'usuariosemail' + '/' + email);

  }

  updateUsuario(id: number, data: Usuario): Observable<any> {
    return this.http.put(this.url + 'usuarios' + '/' + id, data);
  }

  createUsuario(data: Usuario): Observable<any> {
    return this.http.post(this.url + 'usuarios/', data);
  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    console.log("Esta logueado : " + sessionStorage.getItem('isLoggedIn'));
    return (sessionStorage.getItem('isLoggedIn') === "true") ? true : false;
  };


}
