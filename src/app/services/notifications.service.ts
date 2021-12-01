import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';



  getUnreadNotifications(id_usuario: number): Observable<Notification[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Notification[]>(this.url + 'notificacion' + '/' + id_usuario);

  }




  countUnreadNotifications(id_usuario: number): Observable<number> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<number>(this.url + 'notificacioncount' + '/' + id_usuario);

  }

  updateCategorias(id: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    };


    // console.log("Actualiza" + lista);
    return this.http.put(this.url + 'notificacion' + '/' + id, httpOptions);
  }
}