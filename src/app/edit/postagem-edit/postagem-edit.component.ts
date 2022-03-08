import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  tipoPost: string
  demanda: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
  }

  findByIdPostagem (id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  tipoPostagem(event:any) {
    this.tipoPost = event.target.value
  }

  tipoDemanda(event:any) {
    this.demanda = event.target.value
  }
  
  atualizar(){
    this.postagem.demanda = this.demanda
    this.postagem.tipoPostagem = this.tipoPost

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem atualizada com sucesso!')
      this.router.navigate(['/feed'])
    })
  }
}
