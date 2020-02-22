import { Component, OnInit, Input } from '@angular/core';
import {Wine} from '../model/wine.model';

@Component({
  selector: 'wcellar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() public wines: Wine[];
  constructor() { }

  ngOnInit(): void {
  }

}
// Definiši mi atribut u klasi kao javni, sa imenom "wines" i tipom : Niz objekata klase vino
// Input direktiva "@Input()" 