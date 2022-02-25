import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../model/Credentials';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  entrar (userLogin:Credentials): Observable<Credentials> {
    return this.http.post<Credentials> ('',userLogin)
  }

  cadastrar (user:User): Observable<User> {
    return this.http.post<User> ('',user)
  }

  logado () {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok

  }

}
