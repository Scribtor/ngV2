import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine.model'
import { WineService } from '../services/wine.service'
@Component({
  selector: 'wcellar-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})

export class WineListComponent implements OnInit {
  public poslatLimit = this.ws.krajnjiID;
  public ListaVina: Wine[]=[];
  public brojElemenataPoStranici:number=0;
  constructor(private ws:WineService)
  {
  }
  odrediKrajnjiIndex(pIndextmp:number,pElemtmp:number,pLimittmp:number):number
  {
    let tmp:number = pIndextmp+pElemtmp;
    if (
          (pIndextmp+pElemtmp)>pLimittmp
       ) {
      tmp=pIndextmp + (pLimittmp-pIndextmp);
      return tmp;
    }
    return tmp;
  }

  public izmeniStranuPaginacije(javljenaStranicaPaginacije:number)
  {
    // console.log(`Javljeno mi je ${javljenaStranicaPaginacije}`);//3
    let tp = Number(javljenaStranicaPaginacije);
    let pIndex:number=0;
    pIndex = (tp-1)*this.brojElemenataPoStranici;
    let kIndex:number=0;
    kIndex = Number(this.odrediKrajnjiIndex(Number(pIndex),Number(this.brojElemenataPoStranici),Number(this.poslatLimit)));
    // console.log(this.brojElemenataPoStranici);//7
    // console.log(tp);    //2
    // console.log(pIndex);//7
    // console.log(kIndex);//5
    this.ws.praviListu(pIndex,kIndex,this.brojElemenataPoStranici);
    this.ListaVina=this.ws.vratiSve();
    // console.log(this.ListaVina.length);//0
    
  }

  izmeniBrojElemenataPoStrani(p:number)
  {
    // console.log(p);
    
    // console.log(`Javljeno da je novi broj elemenata ${p}`);
    this.brojElemenataPoStranici=Number(p);
    this.izmeniStranuPaginacije(1);

  }
  ngOnInit(): void {
    this.ListaVina=this.ws.vratiSve();   
    this.brojElemenataPoStranici=this.ws.servBrElem;
  }

}