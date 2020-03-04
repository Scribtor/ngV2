import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() primljenBrojElemenataPoStranici:number;
  @Input() primljenUkupanBrojElemenata:number;
  public nizHtml:number[]=[];
  public odabranaStrana:number;
  @Output() javljenaStranaPaginacije:EventEmitter<number>;
  @Output() javljenBrojElemenata:EventEmitter<number>;
  constructor() 
  {
    this.javljenaStranaPaginacije=new EventEmitter;
    this.javljenBrojElemenata = new EventEmitter;
  }

  public dobaviBrojStrana():number
  {
    return Math.ceil(this.primljenUkupanBrojElemenata/this.primljenBrojElemenataPoStranici);
  }

  public odaberiStranu(p:number)
  {
    if (p>=1 && p<=this.dobaviBrojStrana()) 
    {
      this.odabranaStrana=p;
      this.javljenaStranaPaginacije.emit(p);
    }
  }

  public nizZaHtml(p:number)
  {
    let niz:number[]=[];
    for (let i = 0; i < p; i++) {
      niz.push(i+1);
      // console.log(niz);
    }
    return niz;
  }
  
  promeniBrojElemenataPoStrani(p:number)
  {
    this.primljenBrojElemenataPoStranici=p;
    // console.log(this.primljenBrojElemenataPoStranici);
    this.nizHtml=this.nizZaHtml(this.dobaviBrojStrana());
    this.odaberiStranu(1); // Ovde varam, da bi strana preloma uvek bila br1
    this.javljenBrojElemenata.emit(p);
  }
  ngOnInit(): void {
    // console.log(`Primio sam ${this.primljenBrojElemenataPoStranici} elemenata od winelistKomponente`);
    // console.log(`Primio sam ${this.primljenUkupanBrojElemenata} elemenata od winelistKomponente`);
    this.nizHtml=this.nizZaHtml(this.dobaviBrojStrana());
    // console.log(this.nizHtml);
    // console.log(this.dobaviBrojStrana());
    this.odaberiStranu(this.dobaviBrojStrana());
  }
}
