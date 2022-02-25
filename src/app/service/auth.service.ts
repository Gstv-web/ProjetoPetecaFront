import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Credentials } from '../model/Credentials';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  entrar (credentials:Credentials): Observable<Credentials> {
    return this.http.post<Credentials> ('https://peteca.herokuapp.com/user/login', credentials)
  }

  cadastrar (user:User): Observable<User> {
    return this.http.post<User> ('https://peteca.herokuapp.com/user/sign', user)
  }

  logado () {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok

  }

}
