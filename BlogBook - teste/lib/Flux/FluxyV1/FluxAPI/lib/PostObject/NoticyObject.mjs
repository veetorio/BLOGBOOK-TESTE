import { DateFormat } from "../util/DateFormat.mjs";
export class NoticyObject {
    "nome";
    "comentario";
    "url";
    "data" ;
    "hoursdate";
    "user";

     constructor(_nome,_comentario,_path,_user){
        this.nome = _nome;
        this.comentario = _comentario;
        this.url = _path;
        this.user = {'id' : _user};
        this.data = DateFormat.getDate();
        this.hoursdate = DateFormat.getTimer();
    }
}