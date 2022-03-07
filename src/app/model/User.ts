import { Postagem } from "./Postagem";

export class User {

  public userId:number
  public razaoSocial:string
  public email:string
  public senha:string
  public tipo:string
  public endereco:string
  public contato:string
  public foto:string
  public postagem:Postagem[];
}
