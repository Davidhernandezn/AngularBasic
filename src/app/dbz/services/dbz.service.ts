import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable() //decorador
//clase que se podrá inyectar

export class DbzService{//export para usarlo afuera
      //arrray
  private _personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 150000
    },{
    nombre: 'vegeta',
    poder: 10000
    }]

    //creamos su metodo
    get personajes(): Personaje[]{ //decimos que retorna un arreglo de personas
        //lo manda por referencia
        return [...this._personajes]; //para evitarlo usar operador spread, usa [ ] por que es un array
    //despues de tener nuestro metodo el getter va a ser notificado
    }


    constructor(){
        console.log('SERVICE RUNNING..')
    }


    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}