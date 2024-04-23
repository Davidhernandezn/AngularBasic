import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent //IMPORTAR COMPONENT DESPUES DE CREARLO 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent//ESPORTA PARA USARLO
  ]
})
export class SharedModule { }
