import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() primljenBrojElemenataPoStranici:number;
  @Input() primljenUkupanBrojElemenata:number;
  public brojPrelomnihElemenata:number=this.primljenUkupanBrojElemenata/this.primljenBrojElemenataPoStranici;
  public nizHtml:number[]=[];
  public odabranaStrana:number=0;
  @Output() javljenaStrana:EventEmitter<number>;
  constructor() 
  {
    this.javljenaStrana=new EventEmitter;
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
  public dobaviBrojStrana():number
  {
    return this.primljenUkupanBrojElemenata/this.primljenBrojElemenataPoStranici;
  }
  public odaberiStranu(p:number)
  {
    if (
      p>=1 && 
      p<=Math.ceil
          (
          this.dobaviBrojStrana()
          )
       ) 
    {
      this.odabranaStrana=p;
      this.javljenaStrana.emit(p);
    }
  }
  ngOnInit(): void {
    console.log(`Primio sam ${this.primljenBrojElemenataPoStranici} elemenata od winelistKomponente`);
    console.log(`Primio sam ${this.primljenUkupanBrojElemenata} elemenata od winelistKomponente`);
    this.nizHtml=this.nizZaHtml(Math.ceil(this.dobaviBrojStrana()));
    console.log(this.nizHtml);
    console.log(this.dobaviBrojStrana());
  }
}
