import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//PARA USAR ngIf y ngFor
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule, //para poder usar el commun esta importado, AUN QUE
    //EL APP MODULE YA LO TIENE solo lo usa
    //1-IMPORT ANGULAR, 3ROS, CREADO
    FormsModule
  ]
})
export class DbzModule { }
