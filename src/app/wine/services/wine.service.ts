import { Injectable, OnInit } from '@angular/core';
import { Wine } from '../model/wine.model';
// import { VINA } from '../model/lokal_var';
import { ServedWineService } from './served-wine.service';

@Injectable({
  providedIn: 'root'
})
export class WineService{
  public spisak: Wine[] = [];
  public krajnjiID: number = 0;
  public servBrElem: number = 0;
  public httpRSVP:Wine[]=[]; 
  // Ovo je property koji će da čuva ono što stigne sa servera, dok se zapravo samo property spisak menja,
  // a na osnovu veličine ovog property-a. Ovo menja "const VINA" čiji je import zakomentarisan gore
  constructor(private wsH:ServedWineService) { 
    // this.praviListu(0,this.krajnjiID,5);
  }
  public vratiSve():Wine[]
  {
    return this.spisak;
  }
  dodajVino(novo:Wine)
  {
    this.krajnjiID+=1;
    novo._id=this.krajnjiID;
    this.wsH.postData(novo);
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
    return this.httpRSVP.find(x=>x._id===p);
  }
  brisiVino(p:number)
  {
    var idx = this.httpRSVP.findIndex(x => x._id===p);
    this.wsH.deleteData(p);
  }
  osveziVino(tmp:Wine)
  {
    var idx = this.spisak.findIndex(x=>x._id==tmp._id);
    this.spisak[idx]=tmp;
    this.wsH.putData(tmp);
  }
}

