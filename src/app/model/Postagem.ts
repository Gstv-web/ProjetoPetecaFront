import { User } from "./User"

export class Postagem {

  public id:number

  public titulo:string

  public descricao:string

  public localidade:string

  public tipoPostagem:number

  public demanda:number

  public visualizacao:string

  public user:User[]

  public data:Date

}

