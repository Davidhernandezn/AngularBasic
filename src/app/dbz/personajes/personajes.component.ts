import { Component, OnInit, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

//@Input decorador
//Van a venir desde el componente padrea
@Input() personajes:Personaje[] = []; //tipo personaje de la interfaz
  //Podemos agregarle un nombre
  //@Input('data') personajes:any[]=[];


constructor() { }

  ngOnInit(): void {
  }

}
