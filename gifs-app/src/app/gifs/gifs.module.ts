import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent, //NO ES NECESARIO EXPORTARLO YA QUE LO USAREMOS SOLO DENTRO DEL HOME COMPONENT
    CardListComponent,
  ],
  imports: [
    CommonModule//PARA USAR PIPES, NGFOR Y MAS..
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
