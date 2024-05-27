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

    private organizeHistory(tag: string){
        tag = tag.toLowerCase(); //LO MANEJAREMOS EN MINUSCULA
        
        //VALIDA SI EXISTE PARA REMOVERLO Y AGREGARLO AL INICIO
        //FILTER TRAE NUEVO ARREGLO CUYA FUNCION REGRESE VERDADERO
        //UNSHIFT INGRESA NUEVO ELEMENTO AL INICIO
        if(this.tagsHistory.includes (tag)){
            //NUEVO ARRAY, si el tag es diferente lo deja pasar 
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        //INSERTAMOS
        this._tagsHistory.unshift(tag);
        
        //LIMITAR A 10 TAGS
        this._tagsHistory = this.tagsHistory.splice(0,10);
    }

    //RECIBIMOS EL NUEVO TAG
    searchTag(tag: string):void{
    if (tag.length === 0)return;

    this.organizeHistory(tag);

    console.log(this._tagsHistory);//muestra array
    }
}