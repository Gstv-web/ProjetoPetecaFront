import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Credentials } from "../model/Credentials"
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  credentials: Credentials = new Credentials()

  constructor(
    private auth: AuthService,
    private router: Router
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

        this.router.navigate(["/sobre-nos"]);
      },
      error: erro => {
      if (erro.status == 400) {
        alert("Usuário ou senha inválidos");
        }
      }
    });
  }


}
