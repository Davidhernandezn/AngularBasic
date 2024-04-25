import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //RECUPERAR LO INGRESADO, recibe
  /** 
  searchTag(newTag: string){
    console.log({newTag});
  }**/

  //FORMA PARA EL VIEWCHILD ES PARA OBTENER UNA REFERENCIA LOCAL VIEWCHILDREN ES UN ARRAY
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
  }



  //ViewChild
  //NECESITA UNO O 2 ARGUMENTS = SELECTOR NOMBRE DEL ELEMEMTO HTML
  @ViewChild('txtTagInput')//#txtTagInput ES EL ID DEL HTML
  public tagInput!: ElementRef<HTMLInputElement>;//tagInput! INDICA QUE TRAE VALOR = NON NULL  OPERATOR


}
