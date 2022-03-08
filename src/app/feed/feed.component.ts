import { User } from './../model/User';
import { AuthService } from './../service/auth.service';
import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  idUser = environment.userId
  user: User = new User()

  tipoPost: string
  demanda: string


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.postagemService.refreshToken()
    this.authService.refreshToken()
    this.listarPostagens()

  }

  listarPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }

  tipoPostagem(event:any) {
    this.tipoPost = event.target.value
  }

  tipoDemanda(event:any) {
    this.demanda = event.target.value
  }

  publicar(){
    this.user.userId = this.idUser
    this.postagem.user = this.user

    this.postagem.tipoPostagem = this.tipoPost
    this.postagem.demanda = this.demanda

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp;
      alert('Postagem efetuada')
      this.postagem = new Postagem()
      this.listarPostagens()
    })
  }
  

}
