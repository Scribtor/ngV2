import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
@Input() totalItems: number;
@Input() pageSize:number;
@Output() onPageSel: EventEmitter<number>;
pages:number[];
selPage:number=1;

  constructor() {
    this.onPageSel = new EventEmitter;
   }


	public getPageNo() :number
	{
		return Math.ceil(this.totalItems/this.pageSize);
  }

  pageSel(newP: number)
  {
    if (newP>=1 && newP<= this.getPageNo()) {
      this.selPage=newP;
      this.onPageSel.emit(newP);
    }
    console.log(`Active page set to: ${this.selPage}`);
  }
  getPages(){
    this.pages=[];
    for (let i = 0; i < this.getPageNo(); i++) {
      this.pages.push(i+1);
    }
  }
  ngOnInit(): void {
    this.getPages();
  }

}


// Prvo se definišu dva input polja, odnosno dva atributa koja će svoje vrednosti dobiti prilikom pozivanja ove komponente, i kojima osim tipa podatka, nije definisana vrednost.
// Output polje zasad ignorišemo, jer iako je sledeće kucano, nije odmah sledeći logički korak
// Ispod ova tri, imamo i dva atributa koji su niz brojeva, i broj, odnosno niz strana preloma i trenutno odabranu stranu
// U konstruktoru klase je samo definisan novi EventEmitter, klasa koja će služiti za uspostavljanje veze između dve komponente (pagination i wine-list). Taj objekat je izgenerisan prvenstveno jer će nam biti potrbena jedna njegova metoda koja će zapravo vršiti samu komunikaciju, a da bi bili sigurni da je uvek prisutna i izvediva, konstruktor tog objekta se poziva u konstruktoru klase komponente
// Metoda getPageNo ne prima parametre i vraća broj. U svom telu ima samo jedan izraz, a on kaže: podeli ukupan broj delova(vina) sa određenim brojem na kojem se prelamaju strane, i onda taj matematički izraz zaokruži naviše uz pomoć Math modula, koji poziva "ceil" metodu (ceiling-plafon)
// Math.ceil ako pročitaš u dokumentaciji će za na primer, 12/5 što je 2.4 vratiti celobrojno 3
// Iako JS/TS ne poznaje kao poseban tip integere, tj cele brojeve, Math.ceil je napisan tako da VRAĆA CELOBROJNI DEO rezultujućeg izraza (U našem slučaju 12/5)
// Tačna implementacija kako se do toga dolazi nije toliko bitna, ali važno je šta je krajnji rezultat
// pageSel je metoda koja ne vraća ništa a prima jedan parametar, tipa broj. Ona proverava da li je taj prosleđeni broj veći od 0 i u isto vreme manji od maksimalno dozvoljenog, pozivanjem prethodno objašnjene metode getPageNo i AKO taj parametar ispunjava oba uslova, postavlja vrednost odabrane strane na onu koju ima parametar
// Osim toga, ova metoda poziva iskonstruisani EventEmitter objekat i EMITUJE vrednost parametra
// Ovo je važno iz razloga što je upravo ta vrednost ona koja se prosleđuje roditeljskoj komponenti wine-list
// Zbog provere, u konzoli se loguje trenutna vrednost odabrane strane preloma (1 ako nije metoda ušla u if blok, ili 1 ili nešto više, ako jeste, sve u zavisnosti od toga kada je i šta prosleđeno pageSel metodi)
// getPages je metoda bez parametara i povratne vrednosti, koja je izdvojena prvenstveno zbog čistine pisanja, jer je njen jedini zadatak da INPUT ukupnog broja elemenata(vina) koji je broj, serijalizuje, tj pretvori u niz, gde će prvi element biti 1, dužina odgovarati dužini niza koji je prosleđen a poslednji u stvorenom nizu odgovarati indeksu poslednjeg prosleđenog elementa niza vina, uvećan za 1.
// ngOnInit je metoda koja je standardna u svim angular komponentama, i izvršava se po završetku rada konstruktora klase
