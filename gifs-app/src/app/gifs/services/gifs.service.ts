import { Injectable } from '@angular/core';

//providedIn = HACE QUE ESTE DISPONIBLE EN TODA LA APP QUE INYECTEN EL SERVICIO
@Injectable({providedIn: 'root'})
export class GifsService {

    //ALMACENAR HISTORIAL de BUSQUEDAS Y DEBE SER PRIVATE YA QUE EN ALGUN OTRO MODULO LO PUEDEN MODIFICAR SIN DARNOS CUENTA
    private _tagsHistory: string[] = []; //LOS ARREGLOS PASAN POR REFERENCIA


    constructor() { }
    
    get tagsHistory(){
        return [...this._tagsHistory]; //... CREA UNA COPIA
    }

    //RECIBIMOS EL NUEVO TAG
    searchTag(tag: string):void{
    this._tagsHistory.unshift(tag);//unshift = AÑADE AL INICIO
    console.log(this._tagsHistory);//muestra array
    }
}