import { Component, OnInit, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

//@Input decorador
//Van a venir desde el componente padrea
//@Input() personajes:Personaje[] = []; //tipo personaje de la interfaz
  //Podemos agregarle un nombre
  //@Input('data') personajes:any[]=[];

//ACCESO A PERSONAJES DEL SERVICIO PRIVADO
get personajes(){
  return this.dbzService.personajes;
}

constructor(private dbzService: DbzService) { 
  //this.dbzService
}

  ngOnInit(): void {
  }

}
