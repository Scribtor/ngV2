// Definiši mi atribut u klasi kao javni, sa imenom "wines" i tipom : Niz objekata klase vino
// Input direktiva "@Input()" je ništa drugo do pokazatelj ANGULAR-u da prilikom izvršavanja ovog koda OČEKUJE 
// da mu je već prilikom poziva HTML-a ove komponente kojoj ovaj TS fajl pripada, prosleđena vrednost
//  za šta god stoji iza "@Input()", najčešće atribut kojem je definisan tip, ili i početna neka vrednost;

//  Dodavanje servisa APSOLUTNO ništa ne menja ovde

// Klasa je i dalje prosta kao što je i bila kada sam je prvi put izgenerisao, i ostaće takva
// Treba imati u vidu da je ovo komponenta koja ispunjava dva zadatka
// Prvi i glavni je prikaz podataka, koje dobija preko Input/Output vezivanja a drugi je 
// Na posebnim mestima u ovoj komponenti se aktiviraju dve metode ove klase koje onda pozivaju servis,
// odnosno rutiraju korisnika na drugi lokaciju, a na mesto gde je korisnik želeo


// Update za kraj časa5:
// Metode su iste ali je izmenjena implementacija za brisanje 
// (izmena ostaje ista, barem u ovoj komponenti)
// U metodi za brisanje poziva se wsH servis i pretplaćuje se, SUBSCRIBE, na rezultate
// Po pristizanju objekta sa servera, koji je obrisan, emituje se njegov ID, nadKomponenti wineList
// koji dalje aktivira osvežavanje liste, pa onda samim tim i ove tabele
// U slučaju greške se ne događa ništa, a na završetku nakon učitavanja podataka piše se u konzolu
// 
// Za ime i potrebe sortiranja, emituje se novi Output u nadkomponentu winelist, koja proziva
// odgovarajuću metodu, menja njene parametre i vraća novu listu sa servera
// 
// Ova je komponenta doživela najteže promene i izmene tek na kraju projekta, kada su se pojavile
// kozmetičke komponente i funkcionalnosti, poput pretrage