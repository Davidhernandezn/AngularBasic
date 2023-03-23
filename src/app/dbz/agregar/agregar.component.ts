import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input()personajes:Personaje[] = []; //INICIALIZARLO DE 0 Y ESPERARLO COMO INPUT

  constructor() { }

  ngOnInit(): void {
  }
  @Input() nuevo: Personaje={
    nombre: '',
    poder:0
  }

 agregar(){
   //event.preventDefault();//COMPORTAMIENTO NATURAL DEL FORM
   //trim() limpia espacios
   if(this.nuevo.nombre.trim().length === 0){
     return;//salir de este metodo
   }
   console.log(this.nuevo);
   this.personajes.push(this.nuevo)

   this.nuevo = {
     nombre: '',
     poder:0
   }
 }
}
