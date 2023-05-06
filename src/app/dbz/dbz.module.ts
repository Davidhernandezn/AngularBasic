import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//PARA USAR ngIf y ngFor
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    MainPageComponent,//lo que damos alta
    PersonajesComponent,
    AgregarComponent,
    ListComponent //verifica el componente
  ],
  exports:[
    MainPageComponent //que se pueda ver, solo necesitamos el main page por que le cargamos los componentes
  ],
  imports: [
    CommonModule, //para poder usar el commun esta importado, AUN QUE
    //EL APP MODULE YA LO TIENE solo lo usa
    //1-IMPORT ANGULAR, 3ROS, CREADO
    FormsModule
  ],
  
  providers:[//array servicios unica instancia como singleton
    DbzService
  ]
})
export class DbzModule { }
