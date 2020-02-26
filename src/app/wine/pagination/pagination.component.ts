import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { WineListComponent } from '../wine-list/wine-list.component'
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
    this.odaberiStranu(1);
    this.javljenBrojElemenata.emit(p);
  }
  ngOnInit(): void {
    // console.log(`Primio sam ${this.primljenBrojElemenataPoStranici} elemenata od winelistKomponente`);
    // console.log(`Primio sam ${this.primljenUkupanBrojElemenata} elemenata od winelistKomponente`);
    this.nizHtml=this.nizZaHtml(this.dobaviBrojStrana());
    // console.log(this.nizHtml);
    // console.log(this.dobaviBrojStrana());
  }
}
// PITANJA:
// 1. VELIKO PITANJE: Ako ne koristim ništa iz wineList, zašto je onda neophodna za učitavanje paginacije?
// čim se ukloni import iz ovog fajla, ne učitava šta bi trebalo. ZBU-NJU-JU-ĆE!!!
/* @Input() primljenBrojElemenataPoStranici:number;  Ovu promenjivu TIPA BROJ dobijamo iz wineList-e


  @Input() primljenUkupanBrojElemenata:number;      Ovu promenjivu TIPA BROJ dobijamo iz winelist-e


  public nizHtml:number[]=[];     Inicijalno prazan, ovaj niz će se isključivo pozivati kao skladište
   za rezultat jedne druge metode, i biva referenciran samo u HTML fajlu jer samo tome i služi

  public odabranaStrana:number;   Inicijalno tipa broj ali bez vrednosti, koristićemo je u logici sa paginacijom


  @Output() javljenaStranaPaginacije:EventEmitter<number>;  
  Ovim mi vičemo wineList-i da smo promenili stranicu i da hoćemo drugačije rezultate

  @Output() javljenBrojElemenata:EventEmitter<number>;
  Ovim mi vičemo wineList-i da smo promenili broj elemenata koje želimo da vidimo, i spram toga želimo da vidimo
  kakao tabela onda izgleda


  KONSTRUKTOR:
  PITANJA:
  2. Da li su i ovde mogli da stoje eventemitter-i kao injektovane zavisnosti (među parametrima poziva)?

  Ništa specijalno, konstruktor samo poziva dva EventEmitter-a ne bi li bili dostupni prilikom rada

  METODE:

  dobaviBrojStrana() je metoda koja ne prima parametre, ali vraća jedan broj.
  U telu metode vraća matematički zaokružen CEO BROJ rezultata deljenja ukupnog broja elemenata niza koji će se
  prikazivati i broja elemenata koji će se prikazivati na stranici. Oba ova atributa su dinamička, odnosno
  menjaju se u toku izvršavanja i samim tim se ne mogu jednom proglasiti i zaboraviti, već traže ovakvu
  jednostavnu "glupu" get-like metodu

  odaberiStranu() je metoda koja prima jedan parametar, odnosno broj, i ne vraća ništa direktno, međutim
  ona proverava prosleđeni parametar i poredi ga u if grani da li je veći od 1 i manji od trenutnog broja strana
  paginacije (da bi sprečili odabir strane 5 paginacije tamo gde ima samo 3) i samo onda ako je taj parametar
  zadovoljio oba uslova, vrednost atributa "odabranaStrana" dobija vrednost tog parametra, a zatim se taj isti broj
  emituje roditeljskoj, wineList komponenti

  nizZaHtml() je metoda koja prima jedan parametar tipa BROJ i vraća niz koji odgovara 
  sekvenci brojeva od 0 do već prosleđenog broja, gde je svaki element niza uvećan za 1.
  Jedina svrha ove metode ZASAD je da bude referencirana u ng-for u html-u ove komponente

  promeniBrojElemenataPoStrani() je metoda koja prima parametar tipa BROJ i ne vraća ništa
  ona prvo postavlja atributu "primljenBrojElemenataPoStranici" vrednost ulaznog parametra
  zatim se ta vrednost loguje zarad praćenja grešaka (sada zakomentarisano)
  onda se ponovo izračunava vrednost atributa "nizHtml" na osnovu metode ove klase i vrednosti trenutnog broja 
  strana paginacije
  pred kraj, postavlja se da je odabrana strana paginacije prva --- jer ne možemo garantovati ni za jednu drugu
  da će postojati, a na samom kraju emitujemo wineList komponenti vrednost ulaznog parametra
*/

//  Na samoj inicijalizaciji se loguju prosleđene vrednosti i izračunava atribut "nizHtml" po prvi put
//  i nakon toga loguje