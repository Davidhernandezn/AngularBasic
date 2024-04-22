import { Component } from '@angular/core';
@Component({
    selector: 'app-contador', //NOMBRE COMPONENT
    template: `<h1>{{title}}</h1>
    <button (click)="acumular(+1)">+1</button>
    <button (click)="acumular(-1)">-1</button>
    <p>{{numero}}</p>
    <br><hr>
    
    <h2>Base 5</h2>
    <button (click)="cambiarBase(+base)">+{{base}}</button>
    <button (click)="cambiarBase(-base)">-{{base}}</button>
    <p>{{numeroBase}}</p>
    `
})
//Export para usarlo fuera del archivo
export class ContadorComponent{
    title = 'Contador App'; //titulo de la app
    numero: number = 0; //variable
    base: number = 5;
    numeroBase: number = 0;
  /**sumar(){
    this.numero += 1;
  }**/
  
  acumular(valor:number){
    this.numero += valor;
  }
  
  //SUMAR O RESTAR DE 5 EN 5
  cambiarBase(valor:number){
  this.numeroBase += valor;
  }
  
}
