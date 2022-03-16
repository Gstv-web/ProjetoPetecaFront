import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FeedComponent } from './feed/feed.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { AlertasComponent } from './alertas/alertas.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    RodapeComponent,
    ContatoComponent,
    SobreNosComponent,
    FeedComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    InformacaoComponent,
    AlertasComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],

  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

