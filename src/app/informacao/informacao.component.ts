import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/Credentials';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css']
})
export class InformacaoComponent implements OnInit {

  credentials: Credentials = new Credentials()


  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0,0)
    
  }

}
