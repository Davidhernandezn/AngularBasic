 import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, EventEmitter, Input, Output,  OnInit } from '@angular/core';
import { Character, Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'add-dbz-personaje',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

//EMITIR CHARACTER
//TU OUTPUT PUEDE SER onNewCharacter O DE OTRA FORMA
//T es un generico
@Output()//podemos cambiar el nombre o respetarlo
public onNewCharacter: EventEmitter<Character> = new EventEmitter; //ESCUCHA LO EVENT

  //@Input()personajes:Personaje[] = []; //INICIALIZARLO DE 0 Y ESPERARLO COMO INPUT
  
  //@OUTPUT COMPONENTE HIJO EMITE VALOR AL PADRE


 ngOnInit(): void {
  }
  @Input() nuevo: Personaje={
    nombre: '',
    poder:0
  }

  public character: Character = {
    name: '',
    power: 0
  }

//OUTPUT
//@Output() onNuevoPersonaje: EventEmitter <string> = new EventEmitter();
//DEBEMOS DECIR SU TIPO DE DATO PUEDE SER LA INTERFAZ
//emite eventos, siempre agregsr el tipo
//al tener la informacion ya podemos poner el emit
//@Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();

   //LAMADA AL SERVICIO, fuera del metodo
   constructor(private dbzService:DbzService) { }

 agregar(){
   //event.preventDefault();//COMPORTAMIENTO NATURAL DEL FORM
   //trim() limpia espacios
   if(this.nuevo.nombre.trim().length === 0){
     return;//salir de este metodo
   }

   //TENIENDO LA DATA YA PODEMOS HACER LA EMISION AL PADRE
   console.log(this.nuevo);//PERSONAJE EN EL QUE ESTAMOS TRABAJANDO
   //this.onNuevoPersonaje.emit(this.nuevo); //emite el valor del tipo agregado
   

  this.dbzService.agregarPersonaje(this.nuevo);
   
   //this.personajes.push(this.nuevo)
   this.nuevo = {
     nombre: '',
     poder:0
   }


 }

 //AL ENVIAR LA INFO LIMPIAR LOS VALORES 
 emitCharacter():void{
  console.log(this.character);
  if(this.character.name.length === 0) return; //si es 0 no retorna nada y no lo aceptaremos
//EMITIMOS VALOR
//HIJO
  this.onNewCharacter.emit(this.character);//emitimos EL TIPO character
  this.character.name = '';
  this.character.power = 0;
 }
}
