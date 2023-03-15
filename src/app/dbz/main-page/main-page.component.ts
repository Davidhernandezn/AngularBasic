import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  //arrray
  personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 150000
    },{
    nombre: 'vegeta',
    poder: 10000
    }]

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje={
     nombre: '',
     poder:0
   }

   cambiarNombre(event: any){
    console.log(event.target.value);
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
