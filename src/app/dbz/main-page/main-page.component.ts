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

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje={
     nombre: 'Gohan',
     poder:30500
   }

   cambiarNombre(event: any){
    console.log(event.target.value);
   }

  agregar(){
    //event.preventDefault();//COMPORTAMIENTO NATURAL DEL FORM
    console.log(this.nuevo);
  }
}
