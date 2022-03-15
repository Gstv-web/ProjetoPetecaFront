import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  razaoSocial = environment.razaoSocial
  idUser = environment.userId
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.razaoSocial
    environment.userId
  }

}
