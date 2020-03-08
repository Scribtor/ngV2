// Servis je ništa drugo do posebna TS klasa koja sadrži svu Božiju logiku koja ne treba da stoji 
// u klasi komponenata
// Servis takođe služi da komponente koje nemaju odnos direktno roditelj-dete da mogu da komuniciraju
// Injekcijom zavisnosti, prosleđivanjem klase ovog servisa u svoj konstruktor, te komponente
// mogu da koriste sve metode servisa
// Poslednju liniju koda u metodi dodajVino(:Wine) sam napisao ne bi li "dinamički" u promenjivoj VINA
// imao te nove objekte vina dodate. Ovo se resetuje na svakom refresh-u, i zameniću kada dodam httpclient
// u poslednjem delu izrade ovog projekta


// Ovo je bio TS_Komentar do početka petog časa, jer je dotad postojao samo jedan servisa/
// Ja uvodim drugi, barem kao skelu dok ne ižvaćem kako servis radi, da ne bi morao
// Nonstop da gitom menjam commit-ove, da se čekiram, prebacujem, jednostavno -- gubim vreme
// Ime fajla za onaj drugi je wsH_TS_Komentar, i po tim wsL i wsH će se oni zapravo razlikovati u
// komponentama kada one treba da pozovu servis koji CRUD-uje nešto nad podacima
// wsL to radi iz promenjive definisane u njegovom TS fajlu, wsH će to raditi sa npm expressjs servera

// priča sa serverom je dosta izmenila stvari, čak do te mere da ne znam da li u ijednoj komponenti
// imam poziv wsL-a