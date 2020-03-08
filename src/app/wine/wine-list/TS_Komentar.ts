/* 
public poslatLimit = VINA.length;
zasad je stvar vrlo fiksna, ali posle uvođenja back-enda biće veselo

public ListaVina: Wine[]=[];
niz objekata tipa Vino, na osnovu njega će se menjati izgled tabele (vidi HTML komponente)

public brojElemenataPoStranici:number=-12345; 
Za svaki slučaj, Angular se dokazao kao svojeglav. Ako mu eksplicitno ne doznačim da je u pitanju tip broja i JOŠ
zadam vrednost za svaki slučaj, nekad hoće da se ponaša kao da je ovo string (ovo ili bilo koja druga promenjiva ne-string tipa)



  KONSTRUKTOR:
  Prost i prazan.

  METODE:

  praviListu() prima tri parametra, sva tri su brojevi, a značenja su:
  1. početniIndeks
  2. krajnjiIndeks
  3. brojElemenata (ovo je važno zbog preloma-paginacije)
  Rad je prilično bazičan:
  Pre petlje isprazni atribut "ListaVina" ne bi li svaki put mogli da dobijemo tačno šta smo tražili
  Ona vina iz niza "VINA" koja zadovoljavaju uslove for petlje uguraj, jedan po jedan, u atribut "ListaVina"
  promeni atribut "brojElemenataPoStranici" na vrednost trećeg parametra

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  odrediKrajnjiIndex() prima tri parametra, opet sva tri brojevi, ali i vraća četvrtu vrednost, a znače:
  1. početniIndeks
  2. trenutni broj elemenata koji se prikazuje
  3. inicijalno prosleđeni limit
  4. proizvod matematike i logike -- krajnji indeks za "praviList()"

  Rad --- slikovito, brojeve čitati figurativno, ne bukvalno:
  4=1+2;
  Ako je 1+2>3 onda postavi da 4= 1+(3-1) a ako 1+2 NIJE veće od 3, onda vrati 4 kao 1+2
  Ovime se branim od preloma gde bi inače štampao više redova tabele nego što ih imam realno
  (Treća strana preloma gde je broj elemenata 5, ištampao bi redove i za 13,14,15 iako ih u listi nema)

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  izmeniStranuPaginacije() prima samo jedan parametar, 
  ona je metoda koja reaguje na promenu strane iz komponente paginacije, i ne vraća vrednost

  Ova mi je zadala puno muka jer ANGULAR sebi dopušta svašta
  Bag se proizvodi ovako:
  1.Sa svih mesta u metodi skinuti Number()
  2.Sa svih linija log-a skinuti komentar
  3.Uraditi rebuild aplikacije
  4.Početi čupati kosu
  5.Ispratiti logove

  Zašto GADOV ako mu EKSPLICITNO kažem da nešto tipa number i da EKSPLICITNO SABIRAM sa "+" neke vrednosti koje su
  TAKOĐE EKSPLICITNO tipa number, GADOV uzme i slepi atribut klase na atribut "brojElemenataPoStranici"
  Ovom matematikom, 8+4 postanu 84
  ZAŠTO???

  No, vratimo se željenom ponašanju, i sada JASNO nacrtanom ponašanju koje više ne može da ignoriše,metoda radi 'vako:
  Uzmi broj koji je reakcija na neki događaj (to zna html i mi, ts dobija samo broj).
  postavi privremenu promenjivu pIndex na vrednost ulaznog parametra, umanjen za jedan i onda sve to pomnoži
  sa trenutnim brojem elemenata paginacije
  odredi privremenu promenjivu kIndex pomoću metode odrediKrajnjiIndex() po već definisanom šablonu
  pozovi metodu praviListu() sa argumentima redom: pIndex,kIndex,trenutni broj elemenata paginacije

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  izmeniBrojElemenataPoStrani() prima samo jedan parametar,
  i reakcije je na događaj promene select-a u komponenti paginacije, ne vraća vrednost

  vrlo jednostavno, ali neophodno:
  uzmi ulazni parametar p i podesi sa njim vrednost atributa "brojElemenataPoStranici"
  Da bi bili sigurni, pozovi metodu za izmenu strane paginacije sa prosleđenim argumentom broj 1,
  jer hoćemo da znamo da tu stranu paginacije imamo (ako je broj elemenata prevelik ili jednak sa kompletnim nizom)
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

prilikom inicijalizacije pozovi metodu praviListu() i prosledi sledeće argumente:
1. Početni indeks = 0;
2. Krajnji indeks = vrednost atributa "poslatLimit" koji odgovara dužini "const VINA" na početku fajla;
3. BrojElemenata = vrednost atributa "poslatLimit"; Hoćemo da prikažemo sve elemente inicijalno; 
*/
  // public praviListu(indexStart:number, indexEnd:number,brElem:number)
  // {
  //   this.ListaVina=[];
  //   for (let i = indexStart; i < indexEnd; i++) 
  //   {
  //     this.ListaVina.push(new Wine(VINA[i]));
  //   }
  //   this.brojElemenataPoStranici=brElem;
  //   // console.log(`Poslao sam ${this.brojElemenataPoStranici} elemenata paginationKomponenti`);
  // }
  //
  //
  // Metode i promenjive prepravljene tako da koriste wineService, dostupan zbog injekcije zavisnosti

  // Priprema za peti čas: ws je sada wsL, a kad dođe vreme, testiraću sa novim servisom, wsH

  // refreshList() je nova metoda, koja obezbeđuje prvo, i novo učitavanje liste,
  // a sve na osnovu HTTP servisa koji dobavljaju podatke sa "servera" nodeJSExpress-a
  // Ona se jednostavno pretplaćuje, jer je to sad obavezno, SUBSCRIBE, na odjednom ASINHRONU
  // metodu dobavljanja podataka. Da pojasnim:
  // DATA deo govori šta će biti sa podacima kada pristignu, odnosno data je ona nova model klasa 
  // koja glumi odgovor sa servera
  // ERROR deo govori kako će se rukovati program u slučaju da dođe do greške
  // kod mene je to zasad samo log u konzolu
  // () DEO je NAJVAŽNIJI jer on govori šta će program da izvrši NAKON što se dobave svi podacima
  // OVO SAM JAKO DUGO VIJAO DA POHVATAM ne bi li ga nadogradio na projekat
  // Smrdljive kursadžije svaki čas menjaju pesmu i umesto da prate na jednom projektu sve
  // oni za svaki primer novog koncepta izmišljaju nove reference (vine,pica,restorani,to zbuni čoveka)
  // Budući da su sada stvari prebačene sa lokalnog wsL servisa na novi wsH, i praćenje izmena je sada
  // drukčije. refreshList() postoji da bi obezbedio sveže podatke prilikom inicijalizacije
  // kao i prilikom brisanja stavki liste, jer je TABELA PODkomponenta ove komponente
  // za izmenu i osvežavanje ovo nije neophodno, budući da se forma za te stvari nalazi na drugoj
  // adresi pa sim tim rutiranje obavlja ovaj posao direktno
  // Nakon duge i teške operacije, operacija je uspešna. Pacijent je mrtav
  // igrao sam se dosta sa time da li mi treba ili ne polje "poslatLimit" i ispostavlja se
  // da mi TREBA....svaka meni čast kad sam dobro postavio ovaj projekat, tako da sada i paginacija
  // radi barem na lokalu, odnosno u odnosu na ono što se dobije sa servera
