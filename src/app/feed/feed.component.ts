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
  postagemEdit: Postagem = new Postagem()
  postagemDelete: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idPost: number

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

  findByIdPostagem (id:number){
    console.log(id)
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.postagemEdit = resp
      this.postagemDelete = resp
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
  
  atualizar(){
    this.postagemEdit.demanda = this.demanda
    this.postagemEdit.tipoPostagem = this.tipoPost

  
    this.postagemService.putPostagem(this.postagemEdit).subscribe((resp: Postagem) => {
      this.postagemEdit = resp
      alert('Postagem atualizada com sucesso!')
      this.listarPostagens()
      this.router.navigate(['/feed'])
    })
  }

  apagar (){
    this.idPost = this.postagemDelete.id
    console.log(this.idPost)
    this.postagemService.deletePostagem(this.idPost).subscribe(() => {
      alert ('Postagem apagada com sucesso!')
      this.listarPostagens()
      this.router.navigate(['/feed'])
    })
  }

}
