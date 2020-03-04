import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Wine} from '../model/wine.model';
import { WineService } from '../services/wine.service'
import { Router } from '@angular/router'
import { ServedWineService } from '../services/served-wine.service'
// import { EditWineComponent } from "../edit-wine/edit-wine.component";
@Component({
  selector: 'wcellar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 @Input() public Vina: Wine[];
 @Output() public javiPromenuElem:EventEmitter<number>;

  constructor(private wsL:WineService,private rt:Router,private wsH:ServedWineService) 
  { 
    this.javiPromenuElem=new EventEmitter;
  }
  callDelete(p:number):void
  {
    this.wsL.brisiVino(p);
    // this.wsH.brisiVino(p);
    // this.javiPromenuElem.emit(this.ws.vratiSve().length);
  }
  callEdit(p:number):void
  {
    this.rt.navigate(['wines/', p]);
    // Ovo bi bila alternativa za izmenu vina, ali koja bi zahteva injekciju rutera unutar tabele
    // Što po meni nema smisla, jer nema potrebe da zatrpavamo memoriju glupostima
  }
  ngOnInit(): void {
  }

}
// Definiši mi atribut u klasi kao javni, sa imenom "wines" i tipom : Niz objekata klase vino
// Input direktiva "@Input()" je ništa drugo do pokazatelj ANGULAR-u da prilikom izvršavanja ovog koda OČEKUJE 
// da mu je već prilikom poziva HTML-a ove komponente kojoj ovaj TS fajl pripada, prosleđena vrednost
//  za šta god stoji iza "@Input()", najčešće atribut kojem je definisan tip, ili i početna neka vrednost;

//  Dodavanje servisa APSOLUTNO ništa ne menja ovde

// Klasa je i dalje prosta kao što je i bila kada sam je prvi put izgenerisao, i ostaće takva
// Treba imati u vidu da je ovo komponenta koja ispunjava dva zadatka
// Prvi i glavni je prikaz podataka, koje dobija preko Input/Output vezivanja a drugi je 
// Na posebnim mestima u ovoj komponenti se aktiviraju dve metode ove klase koje onda pozivaju servis,
// odnosno rutiraju korisnika na drugi lokaciju, a na mesto gde je korisnik želeo