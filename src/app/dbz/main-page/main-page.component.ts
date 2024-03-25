import { Component, OnInit } from '@angular/core';
import { Character, Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
//public characters: Character[]=[];//llamamos interfaz, no se llaman en el modulo
//MANDA DATOS AL INPUT
//Siempre define que tipo de dato se usara, evita usar any (USA UNA INTERFAZ)
//DATOS ENVIADOS
/***AL INSERTAR UN NUEVO VALOR DEBE AGREGARSE AQUI, DEBE EMITIRSE ESE VALOR */
public characterList: Character[]=[{
  name:'Trunks',
  power: 10
},{
  name:'Goku',
  power: 140 
}
]
  // //arrray
  // personajes: Personaje[] = [
  //   {
  //     nombre:'Goku',
  //     poder: 150000
  //   },{
  //   nombre: 'vegeta',
  //   poder: 10000
  //   }]
  //personajes: Personaje[] = [];


  ngOnInit(): void {
  }

  nuevo:Personaje={ //MANDA LOS DATOS
    nombre: 'Maestro Roshi',
    poder:234
  }

  //arreglo tipado de tipo personajes
  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }


  //agregarNuevoPersonaje(argumento: Personaje){
    //console.log("nuevo per") 
    //EL HIJO EMITE EVENTO EL PADRE RECIBE E INTERPRETA, de momento manda personaje
    //debugger;
    //manda argumento
    //this.personajes.push(argumento);//Agrega al array
  //}

  constructor(){

//  constructor(private dbzService: DbzService){ //Inyeccion de dependencias
    //al crear componente asignara el valor que se tiene en el servicio 
    //this.personajes= this.dbzService.personajes;
  }


  //Recibira un character
  onNewCharacter(character: Character):void{ //si pones string es lo que  va a esperar o Tipo que tu decida como la interfaz
    //RECIBIR EVENTOS
  console.log("MAIN EVENT")
  console.log(character)

  }
}
