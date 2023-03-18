import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { Sites } from '../models/sites.model';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  constructor(private http: HttpClient) {}

  private url = 'http://192.168.33.10:3000/api';

  /*getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/users`);
  }*/

  /*getOneUser(id: any): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/users/${id}`);
  }*/

  getUserByMail(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/users/mail/`, data);
  }

  /*createUser(data: any): Observable<any> {
    return this.http.post(`${this.url}/users/new`, data);
  }*/

  /*updateUser(id : any, data : any): Observable<any> {
    return this.http.put(`${this.url}/users/update/${id}`, data);
  }*/

  /*deleteUser(id : any): Observable<any> {
    return this.http.delete(`${this.url}/users/delete/${id}`);
  }*/

  /*getAllSites(): Observable<Sites[]> {
    return this.http.get<Sites[]>(`${this.url}/sites`);
  }*/

  /*getOneSite(id: any): Observable<Sites[]> {
    return this.http.get<Sites[]>(`${this.url}/sites/${id}`);
  }*/

  /*getSiteByUrl(data: any): Observable<any> {
    return this.http.post(`${this.url}/sites/url/`, data);
  }*/

  createSite(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/sites/new`, data);
  }

  /*updateSite(id : any, data : any): Observable<any> {
    return this.http.put(`${this.url}/sites/update/${id}`, data);
  }*/

  /*deleteSite(id : any): Observable<any> {
    return this.http.delete(`${this.url}/sites/delete/${id}`);
  }*/
}
