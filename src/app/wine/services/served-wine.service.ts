import { Injectable } from '@angular/core';
import { Wine } from '../model/wine.model'

export var VINA = 
[
    {
        _id: 1, 
        name: 'CHATEAU DE SAINT COSME', 
        year: 2009, 
        grapes: 'Grenache / Syrah', 
        country: 'France', 
        region: 'Southern Rhone / Gigondas', 
        description: 'The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.', 
        picture: 'saintcosme.jpg'
    }
]
;

  
@Injectable({
  providedIn: 'root'
})
export class ServedWineService {

  public spisak: Wine[] = [];
  public krajnjiID: number = VINA.length;
  public servBrElem: number = 0;
  constructor() { 
    this.praviListu(0,this.krajnjiID,12);
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
    novo.id=this.krajnjiID;
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
    return this.spisak.find(x=>x.id===p);
  }
  brisiVino(p:number)
  {
    var idx = this.spisak.findIndex(x => x.id===p);
    this.spisak.splice(idx,1);
  }
  osveziVino(tmp:Wine)
  {
    var idx = this.spisak.findIndex(x=>x.id==tmp.id);
    this.spisak[idx]=tmp;
  }

}
// Ovde zasad ništa, rekoh