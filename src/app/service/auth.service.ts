import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Credentials } from '../model/Credentials';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar (credentials:Credentials): Observable<Credentials> {
    return this.http.post<Credentials> ('https://peteca.herokuapp.com/user/login', credentials)
  }

  cadastrar (user:User): Observable<User> {
    return this.http.post<User> ('https://peteca.herokuapp.com/user/sign', user)
  }


  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://peteca.herokuapp.com/user/${id}`)
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>('https://peteca.herokuapp.com/user/edit', user, this.token)
  }

  logado () {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok

  }

}
