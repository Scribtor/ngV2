// Ova klasa i konstruktor su dobar primer kako rukovati nepoznatim i nepredvidivim podacima
//  na koje ne možemo uvek da utičemo. 
// Ova klasa prima 8 atributa i njen konstruktor radi tako što prvo kaže da je njegov parametar opcioni
//  odnosno može i ne mora da prima parametar pri pozivanju.
// Ono što ovaj konstruktor koristi je prednost logičkog operatora && nad logičkim operatorom ||
// Vrednost atributa koje ovaj konstruktor postavlja 
// zavisi od provere da li je prosleđeni parametar true (što je uvek tačno kada parametar nije NULL)
//  i da li prosleđeni parametar je objekat sa traženim atributom
// Ako prosleđeni parametar nije objekat, ili nije objekat sa traženim atributom,
//  vrednost atributa u konstruisanom objektu biće null, kao rezultat evaluacije logičkog izraza sa desne strane
// \\  // Ono što MENI nije JASNO je ZAŠTO je uopšte ovakav izraz ISPRAVAN,
//  jer logički operatori za rezultat imaju samo boolean vrednosti. 
// Ako je ovaj izraz tačan, odnosno ako prosleđujemo objekte sa ispravnim tipom informacija,
//  zar ovakav konstruktor ne bi trebalo da postavlja vrednosti u atributima na true,true,true,true???
//  Da li ovde postoji nešto što mi je promaklo, nešto što postoji neizrečeno? // \\
// Odgovor: JS dozvoljava da kad se evaluiraju logički operatori,
//  da kad naiđe na logički izraz koji zadovoljava, za logički && oba uslova ili za logički || operator,
//  uzme vrednost desnog dela uslova. 
// Potpuno nedosledno, nelogično i kretenski, ali ECMAScript dokumentacija kaže da je tako, i Bog.
//  Mož' se jebeš ako ti se ne dopada. U ovakvom primeru, ako je objekat prosleđen i ima taj i taj atribut,
//  vrednost atributa koji konstruktor postavlja biće vrednost tog ispravnog atributa koji se proveravao.
//  Niđe mozga ni veze, ali bar sam proverio da nisam jedini kojem je to kretenski, ali šta je tu je.
// U ovom delu zadatka se postavlja model podataka za klasu vina koja će se kasnije koristiti.
//  Vidi wine-list komponentu za dalje.
/**/
// Dodati su get-set pristupne metode, i promenjena su imena atributa, i u modelu i u "fajlu" var VINA
// ANGULAR SMRDLJIVI KADA RADI SA PROPERTY-ima koji se menjaju dinamički, više ne poznaje get/set 
// metode, odnosno ne može iz nekog razloga da im pristupi....kao da on sam pravi svoje neke 
// temp klase koje NEMAJU pristup mojim klasama....debilno, ali drugog odgovora nemam
// sve je logovano kroz git, nema laži nema prevare, nema greške