import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Credentials } from "../model/Credentials";
import { AuthService } from '../service/auth.service';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  credentials: Credentials = new Credentials()
  user: User = new User
  confirmarSenha: string
  tipo: string

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.credentials).subscribe({
      next: (resp: Credentials) => {
        this.credentials = resp

        environment.foto = this.credentials.foto;
        environment.razaoSocial = this.credentials.razaoSocial;
        environment.userId = this.credentials.userId;
        environment.token = this.credentials.token;

        this.router.navigate(["/feed"]);
      },
      error: erro => {
      if (erro.status == 400) {
        alert("Usuário ou senha inválidos");
        }
      }
    });
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipo = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipo

    if(this.user.senha != this.confirmarSenha){
      alert("A senha está incorreta.")
    } else {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
        this.router.navigate(["/entrar"])
      })
    }
  }

}
