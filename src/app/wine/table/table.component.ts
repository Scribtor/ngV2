import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Wine} from '../model/wine.model';
import { WineService } from '../services/wine.service'
@Component({
  selector: 'wcellar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 @Input() public Vina: Wine[];
 @Output() public javiPromenuElem:EventEmitter<number>;

  constructor(private ws:WineService) 
  { 
    this.javiPromenuElem=new EventEmitter;
  }
  callDelete(p:number):void
  {
    this.ws.brisiVino(p);
    // this.javiPromenuElem.emit(this.ws.vratiSve().length);
  }
  callEdit(p:number):void
  {

  }
  ngOnInit(): void {
  }

}
// Definiši mi atribut u klasi kao javni, sa imenom "wines" i tipom : Niz objekata klase vino
// Input direktiva "@Input()" je ništa drugo do pokazatelj ANGULAR-u da prilikom izvršavanja ovog koda OČEKUJE 
// da mu je već prilikom poziva HTML-a ove komponente kojoj ovaj TS fajl pripada, prosleđena vrednost
//  za šta god stoji iza "@Input()", najčešće atribut kojem je definisan tip, ili i početna neka vrednost;

//  Dodavanje servisa APSOLUTNO ništa ne menja ovde