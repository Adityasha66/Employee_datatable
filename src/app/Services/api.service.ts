import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public addName(data: any) {
    return this.http.post<any>('http://localhost:3200/User', data)
  }

  public getName() {
    return this.http.get<any>('http://localhost:3200/User')
  }

  public deleteName(data: any) {
    return this.http.delete<any>('http://localhost:3200/User/' + data)
  }

  public updateName(data: any, id: any) {
    return this.http.put<any>('http://localhost:3200/User/' + id, data)
  }

  // public login(data: any) {
  //   return this.http.post<any>('http://localhost:3200/User/login', data)
  // }

}
