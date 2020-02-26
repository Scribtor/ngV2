import { Component, OnInit, Input } from '@angular/core';
import {Wine} from '../model/wine.model';

@Component({
  selector: 'wcellar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 @Input() public Vina: Wine[];

  constructor() 
  { 

  }
  ngOnInit(): void {
  }

}
// Definiši mi atribut u klasi kao javni, sa imenom "wines" i tipom : Niz objekata klase vino
// Input direktiva "@Input()" je ništa drugo do pokazatelj ANGULAR-u da prilikom izvršavanja ovog koda OČEKUJE 
// da mu je već prilikom poziva HTML-a ove komponente kojoj ovaj TS fajl pripada, prosleđena vrednost
//  za šta god stoji iza "@Input()", najčešće atribut kojem je definisan tip, ili i početna neka vrednost;