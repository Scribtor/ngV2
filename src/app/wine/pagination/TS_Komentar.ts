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
//  Klasa se takođe postavlja na tu podrazumevanu jedinicu
// Dodavanje servisa zasad ne utiče na promenu ove komponente

// U pripremi za peti čas, obrisan sad konačno nepotreban import winelist-e
// Sumnjam na to da je nepotreban otkako sam uveo servis i otkako je povratna sprega za paginaciju u toj
// komponenti izmenjena da sad poziva servis, a ne da menja atribut komponente

// Rad sa serverom i podacima sa njega I DALJE ne utiče na ovu komponentu

// Svaka meni čast, onako kako sam napisao paginaciju ručno pre dve nedelje, takva je i ostala
// Ovde je zaista prava promena bila zadnji put kad sam se bavio ovom komponentom
// Budući da se ona oslanja isključivo na događaje iz nadkomponente, ona uvek može da radi sa pravim
// informacijama i da prikazuje prave stvari
// U rešenju kursadžija pominje se onchanges implementacija
// OVDE TO NE TREBA! EventEmitter-i već obavljaju posao vrlo uspešno
// Sve zato što sam dizajnu ove komponente posvetio dužno vreme i logiku kako je napraviti