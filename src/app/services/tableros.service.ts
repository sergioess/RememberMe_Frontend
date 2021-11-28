import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Tablero } from '../models/tablero';
import { Tarea } from '../models/tarea';



@Injectable({
  providedIn: 'root'
})
export class TablerosService {

  public tableroPasaDetail: Tablero = new Tablero();

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';
  items: Tablero[] = [];

  getTablerosUsuario(id_usuario: number): Observable<Tablero[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Tablero[]>(this.url + 'tablerousr' + '/' + id_usuario);

  }




}
