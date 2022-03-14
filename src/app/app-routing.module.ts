import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { InformacaoComponent } from './informacao/informacao.component';


const routes: Routes = [
  {path:'', redirectTo:'sobre-nos', pathMatch:'full'},

  //Rotas

  {path:'entrar', component: EntrarComponent},
  {path:'contato',component: ContatoComponent},
  {path:'sobre-nos', component: SobreNosComponent},
  {path:'feed', component: FeedComponent},
  {path:'postagem-edit/:id', component: PostagemEditComponent},
  {path:'postagem-delete/:id', component: PostagemDeleteComponent},
  {path:'user-edit/:id', component: UserEditComponent},
  {path: 'informacao', component: InformacaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
