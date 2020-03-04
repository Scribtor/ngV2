import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine.model'
import { ServedWineService } from '../services/served-wine.service'
@Component({
  selector: 'wcellar-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})

export class WineListComponent implements OnInit {
  public poslatLimit:number;
  public ListaVina: Wine[]=[];
  public brojElemenataPoStranici:number=0;
  constructor(private wsH:ServedWineService)
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
    // this.wsL.praviListu(pIndex,kIndex,this.brojElemenataPoStranici);
    // this.wsH.praviListu(pIndex,kIndex,this.brojElemenataPoStranici);
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
    this.wsH.getData().subscribe
      (
       data => { this.poslatLimit = data.count; this.ListaVina = data.wines;}, 
       error =>{console.log("Error fetching data, because: ", error.statusText);}
      );
      console.log(this.ListaVina);
  }

}