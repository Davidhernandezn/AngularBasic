import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent //NO ES NECESARIO EXPORTARLO YA QUE LO USAREMOS SOLO DENTRO DEL HOME COMPONENT
  ],
  imports: [
    CommonModule//PARA USAR PIPES, NGFOR Y MAS..
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
