import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bitacora } from '../models/bitacora'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';

  getBitacora(id: number): Observable<Bitacora[]> {
    // console.log(this.http.get<Bitacora[]>(this.url + '/bitacora' + '/' + id))
    return this.http.get<Bitacora[]>(this.url + '/bitacora' + '/' + id);
  }

  deleteBitacora(id: number): Observable<Bitacora[]> {
    return this.http.delete<Bitacora[]>(this.url + '/bitacora' + '/' + id);
  }


  createBitacora(data: Bitacora): Observable<any> {
    return this.http.post(this.url + 'bitacora/', data);
  }

}
