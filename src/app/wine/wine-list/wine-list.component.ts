import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { Wine } from '../model/wine.model'
import { ServedWineService } from '../services/served-wine.service'
import { WineService } from '../services/wine.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'wcellar-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})

export class WineListComponent implements OnInit,OnDestroy {
  // ngAfterContentInit(): void {
  //   // this.praviListu(0,this.poslatLimit,5);
  //   // console.log("5. Treba mi AfterContent");


  // }
  // ngAfterViewInit(): void {
  //   // this.praviListu(0,this.poslatLimit,8);
  //   console.log("8. Treba mi AfterView");
  // }

  public poslatLimit:number=0;
  public ListaVina: Wine[]=[];
  public httpRSVP:Wine[]=[];
  public brojElemenataPoStranici:number=0;
  public hstpParamS =
  {
    sort:"",
    sortDirection:"",
    page:1,
    pageSize:50,
    filter:{
      name:""
    }
  };
  constructor(private wsH:ServedWineService)
  {
  }

  odrediKrajnjiIndex(pIndextmp:number,pElemtmp:number,pLimittmp:number):number
  {
    let tmp:number = pIndextmp+pElemtmp;
    if (
          (pIndextmp+pElemtmp)>pLimittmp
       )
    {
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
    this.praviListu(pIndex,kIndex,this.brojElemenataPoStranici);
    // console.log(this.ListaVina.length);//0

  }
  public praviListu(indexStart:number, indexEnd:number,brElem:number)
  {
    this.ListaVina=[];
    for (let i = indexStart; i < indexEnd; i++)
    {
      this.ListaVina.push(new Wine(this.httpRSVP[i]));
    }
    this.brojElemenataPoStranici=brElem;
    // console.log(`Poslao sam ${this.brojElemenataPoStranici} elemenata paginationKomponenti`);
  }
  izmeniBrojElemenataPoStrani(p:number)
  {
    // console.log(p);

    // console.log(`Javljeno da je novi broj elemenata ${p}`);
    this.brojElemenataPoStranici=Number(p);
    this.izmeniStranuPaginacije(1);
  }
  refreshList():Subscription
  {
    return this.wsH.getData(this.hstpParamS).subscribe
    (
      data => {
        this.poslatLimit = data.wines.length; // Neozbiljno,matori
        // Ovo je trebalo da bude data.count, ali nije. Neozbiljno
        this.httpRSVP = data.wines;
        // this.poslatLimit=7;
              },
      error => {
        console.log("error", error.statusText);
               },
      () => {
        this.izmeniBrojElemenataPoStrani(this.poslatLimit);
        // console.log(`Dobio sam sa servera ${this.ListaVina.length} komada vina `);
       },
    );
  }
  ngOnInit(): void {
    this.refreshList();
    // console.log(`Dobio sam sa servera ${this.ListaVina.length} komada vina `);
  }
  ngOnDestroy (): void
  {
    this.refreshList().unsubscribe();
  }
  callSort(p:string)
  {
    if (this.hstpParamS.sort==p) {
      if (this.hstpParamS.sortDirection=='desc') {
        this.hstpParamS.sortDirection = '';}
        else{this.hstpParamS.sortDirection='desc';}
    }else{
      this.hstpParamS.sort=p;
      this.hstpParamS.sortDirection='';
    }
    this.refreshList();
  }
  pretragaIme(p:string){
    this.hstpParamS.filter.name=p;
    this.refreshList();
  }
}
