import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipo: string
  
  constructor(
    private postagemService: PostagemService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == "") {
      alert("Sua sessão expirou. Faça o login novamente");
      this.router.navigate(["/entrar"]);
    }

    this.idUser = this.route.snapshot.params['id'];
    this.findById(this.idUser);
    this.authService.refreshToken();
  }

  confirmPassword(event: any) {
    this.confirmarSenha = event.target.value;
  }

  findById(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp;
    })
  }

  edit(){
    this.tipo = environment.tipo

    if (this.user.senha != this.confirmarSenha) {
      alert("As senhas não são iguais!")
    } else {
      this.authService.putUser(this.user).subscribe((resp: User) => {
        this.user = resp;
        alert("Usuário atualizado com sucesso!");
        this.router.navigate(["/feed"]);
      });
    }
  }


}
