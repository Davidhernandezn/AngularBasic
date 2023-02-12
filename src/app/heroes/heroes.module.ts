import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        //componentes y pipes
        HeroeComponent,
        ListadoComponent
    ], 
    //visibles o que quiero que este en la app afuera del modulo
    //si queremos usar el componente app listado debemos exportarlo
exports:[
    ListadoComponent
],
imports:
[//SOLO MODULOS EN IMPORTS
    CommonModule //
]

})

export class HeroesModule{
}