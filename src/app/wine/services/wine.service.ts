import { Injectable, OnInit } from '@angular/core';
import { Wine } from '../model/wine.model';
import { VINA } from '../model/lokal_var';
import { ServedWineService } from './served-wine.service';

@Injectable({
  providedIn: 'root'
})
export class WineService{
  public spisak: Wine[] = [];
  public krajnjiID: number = VINA.length;
  public servBrElem: number = 0;
  constructor(private wsH:ServedWineService) { 
    // this.praviListu(0,this.krajnjiID,12);
  }

  public praviListu(indexStart:number, indexEnd:number,brElem:number)
  {
    this.spisak=[];
    for (let i = indexStart; i < indexEnd; i++) 
    {
      this.spisak.push(new Wine(VINA[i]));
    }
    this.servBrElem=brElem;
    // console.log(`Poslao sam ${this.brojElemenataPoStranici} elemenata paginationKomponenti`);
  }
  public vratiSve():Wine[]
  {
    return this.spisak;
  }
  dodajVino(novo:Wine)
  {
    this.krajnjiID+=1;
    novo._id=this.krajnjiID;
    this.spisak.push(novo);
    VINA.push(novo);
  }
  // vratiIndex(p:number):number
  // {
  //   for (let i = 0; i < this.spisak.length; i++) {
  //     if (this.spisak[i].id===p) {
  //       return p;
  //     }
  //   }
  //   return -1;
  // }
  dobaviPoID(p:number):Wine
  {
    return this.spisak.find(x=>x._id===p);
  }
  brisiVino(p:number)
  {
    var idx = this.spisak.findIndex(x => x._id===p);
    this.spisak.splice(idx,1);
  }
  osveziVino(tmp:Wine)
  {
    var idx = this.spisak.findIndex(x=>x._id==tmp._id);
    this.spisak[idx]=tmp;
  }
}

