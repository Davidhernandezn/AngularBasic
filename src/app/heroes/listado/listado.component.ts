import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //Declarar arreglo de strings  
  heroes: string[] = ['Goku', 'Iron Man', 'Hulk', 'Vegeta'];
  heroeBorrado: string = '';
  constructor() { 
  }

  ngOnInit(): void {
  }

  borrar(){
    //devuelve string o string vacio
    const heroeBorrado =this.heroes.shift() || '';//eliminar primer elemento y retorn
    this.heroeBorrado = heroeBorrado;
    //console.log(heroeBorrado+" eliminado");
    
  }

}
