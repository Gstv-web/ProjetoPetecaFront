import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this. token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://peteca.herokuapp.com/postagem/all')
  }

  getByIdPostagem(id: number){
    return this.http.get<Postagem>(`https://peteca.herokuapp.com/postagem/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem>{
    return this.http.get<Postagem>(`https://peteca.herokuapp.com/postagem/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://peteca.herokuapp.com/postagem/new', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://peteca.herokuapp.com/postagem/edit', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://peteca.herokuapp.com/postagem/delete/${id}`, this.token)
  }
}
