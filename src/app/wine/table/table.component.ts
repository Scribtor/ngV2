import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Wine } from '../model/wine.model';
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
//  @Output() public javiPromenuElem:EventEmitter<number>; zaovstavština rada sa wsL
 @Output() private vinoDel :EventEmitter<number>;
 @Output() private sortiraj: EventEmitter<string>;

  constructor(private rt:Router,private wsH:ServedWineService)
  {
    // this.javiPromenuElem=new EventEmitter;
    this.vinoDel=new EventEmitter;
    this.sortiraj=new EventEmitter;
  }
  callDelete(p:number):void
  {
    this.wsH.deleteData(p).subscribe(
      x=> {this.vinoDel.emit(x._id)},
      err =>{},
      ()=>{
        // console.log('evo neki tekst za DELETE');
         });
    // this.javiPromenuElem.emit(this.wsL.vratiSve().length);
  }
  callEdit(p:number):void
  {
    this.rt.navigate(['wines/', p]);
    // Ovo bi bila alternativa za izmenu vina, ali koja bi zahteva injekciju rutera unutar tabele
    // Što po meni nema smisla, jer nema potrebe da zatrpavamo memoriju glupostima
  }
  ngOnInit(): void {
  }
  emitujSort(p:string)
  {
    this.sortiraj.emit(p);
  }

}
