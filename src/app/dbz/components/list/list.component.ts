import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-list',//verifica que sea un buen nombre
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
//USAR EN EL EXTERIOR //ESTO SI NO MANDA NADA SERÁ EN EL VALOR POR DEFECTO
//COMUNICACION con EL EXTERIOR characterList
@Input()
//VALOR POR DEFECTO SI NO SE CARGA LA INFO
public characterList: Character[]=[{
  name:'Trunks',
  power: 10
}]
  constructor() { }

  ngOnInit() {
  }

}
