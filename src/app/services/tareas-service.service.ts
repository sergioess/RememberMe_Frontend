import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';
  items: Tarea[] = [];
  getTareas(): Observable<Tarea[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Tarea[]>(this.url + 'tareas');

  }

  getTareasUsuario(id: number): Observable<Tarea[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Tarea[]>(this.url + 'tareasusuario' + '/' + id);

  }

  updateTarea(id: number, data: Tarea): Observable<any> {
    return this.http.put(this.url + 'tareas' + '/' + id, data);
  }

  createTarea(data: Tarea): Observable<any> {
    return this.http.post(this.url + 'tareas/', data);
  }


}
