import { Injectable } from "@angular/core";

@Injectable() //decorador
//clase que se podrá inyectar

export class DbzService{//export para usarlo afuera
    constructor(){
        console.log('SERVICE RUNNING..')
    }

}