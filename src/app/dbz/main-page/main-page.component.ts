import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

  nuevo:Personaje={ //MANDA LOS DATOS
    nombre: 'Maestro Roshi',
    poder:234
  }
}
