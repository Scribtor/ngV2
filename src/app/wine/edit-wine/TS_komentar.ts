/*
    1.putanja za import kada je relativna, se traži prvo u odnosu na fajl koji ga poziva, a onda tek u odnosu
    na node_modules direktorijum koji se nalazi u korenu direktorijuma projekta
    2.Zakomentarisano je primer objekta vina, jer sam mislio da mi treba u nekom momentu. Greške pri učenju!
    Hehe
    3.Definišu se dva atributa, jedan tipa Wine, drugi tipa FormGroup
    4.Injekcijom zavisnosti omogućujemo da se u objektu klase komponente koju koristimo, mogu koristiti
    i objekti drugih klasa jer su nam naročito korisni iz ovog ili onog razloga, a ovako radimo samo kada
    nemamo potrebu za definisanjem eksplicitnih atributa ili prenosa nekih vrednosti u tim objektima
    nego samo koristimo određene funkcionalnosti tih objekata
    5.U samom telu konstruktora pozivamo metodu koju inače ne bi mogli koristiti, koja koristi injektovani
    formBuilder objekat i njegovu group metodu da sastavi formGroup
    6.ngOnInit() je metoda koja se proziva odmah nakon iskonstruisanog objekta, a u ovom slučaju ovde se
    prvo za svaki slučaj, resetuje vrednost formGroup-e a onda našem atributu "Vino" prosleđujemo vrednosti
    sa te i takve formGroup-e (null i "")
    konzolni logovi su zakomentarisani
    7.onSubmit() je metoda koja se okida samo kada se pritisne dugme "Submit" i ona kupi vrednost unetu u formu,
    prosleđuje u atribut "Vino" i onda resetuje formu. razlika između 6 i 7 je što na inicijalizaciji želimo
    da obezbedimo da je forma čista i bez grešaka, a ne želimo ni da nam se okida validacija sa porukama,
    a prilikom slanja podataka želimo da povučemo te "prljave" podatke i zasad samo ispišemo na konzoli, pa
    tek nakon toga da očistimo formu i pripremimo je za sledeći unos
    8.onRevert() je metoda koja, ZASAD, služi samo za čišćenje forme jednostavnim pozivom metode reset
    klase formGroup
    9.makeForm() je metoda koja na osnovu injektovanog formBuilder objekta i njegove group metode pravi
    formGroup. Ovde možemo videti da prilikom konstrukcije, omogućujemo validaciju podataka, odnosno da li
    se samo zahteva da polje nije prazno "Validators.required" ili i da odgovaraju specifičnim zahtevima
    Napr: kontrola na formi "godina" je broj i ne sme biti manja od 1900 i veća od 2020, odnosno ne uzimamo
    u obzir berbe koje su se desile pre 1900. i ne dozvoljavamo unos berbe koja se još nije desila
    10.hasNumUpLow(p:string):boolean je metoda koja se koristi za validaciju polja za region
    Da bi skratili proces maksimalno, prvo ide kratka if provera da vrati netačan rezultat ako je parametar
    prazan skup "" ili nedefinisan (undefined/null).Ako se ta provera ne izvrši, kod ide dalje.
    postavljaju se tri flag promenjive tipa boolean, sve tri su inicijalno false.
    Metoda tretira prosleđeni parametar tipa string kao niz karaktera i for petljom utvrđuje sledeće:
    postavlja se privremena promenjiva "x" i njoj se dodeljuje  NUMERIČKA vrednost karaktera koji trenutno prolazi kroz
    telo for petlje
    1.if --- ako je "x" broj postavi vrednost odgovarajućeg boolean-a na true i odma idi na korekciju,
    ne želimo da dalje proveravamo bilo šta
    2.else if --- ako je trenutni karakter jednak po vrednosti sa istim tim karakterom nakon što se pretvori
    u veliko slovo posebnom metodom (taj karakter JESTE veliko slovo) postavi odgovarajući boolean na true i
    ponovo preskači ostale provere, idi na korekciju
    3.else if --- ako je trenutni karakter jednak po vrednosti sa istim tim karakterom nakon što se pretvori
    u malo slovo posebnom metodom (taj karakter JESTE malo slovo) postavi odgovarajući boolean na true i
    ponovo preskači ostale provere, idi na korekciju
    Nakon završetka for petlje, vrati izraz koji je logički rezultat sva tri boolean-a unutar metode.
    Ako bar jedan od njih nije true, vratiće se false
    (samo true&&true&&true vratiće true, u bilo kojoj drugoj kombinaciji vratiće se false)
    11.refreshBtn() ---metoda koja je trenutno zakomentarisana i neće biti definisana
    Pokušaj prilagođavanja validacije koju daje angular sa metodom koju sam sam napisao, u neznanju
    da mi ovakvo nešto nije potrebno, a posle se ispostavilo i suvišno.
    11. Potpuni višak, ali neka ga nek ostane za primer, kako ne treba.
    Promena na dugmetu ne mora nužno uvek da okine promenu stanja forme ili atributa drugog dugmeta
    Nije važno da li sama forma vraća validno ili ne, važno je da se submit dugme ne može pritisnuti dokle
    god se SVI uslovi njegovog "disabled" atributa ne ispune, a tu uključujem i drugu metodu koja proverava
    baš to
*/
/*
Jedina izmena je injekcija u konstruktoru, i poziv dvema metodama, jedna wineService-u, druga Router-u
jer tako je zahtevano po zadatku



SMRDLJIVI ANGULAR


KADA SMRDLJIVOM ANGULARU KAŽEŠ DA HOĆEŠ DA KORISTIŠ PRIVATE ATRIBUTE, BOLJE DA SE OBESIŠ O KRIVU VRBU
SMRDLJIVI ANGULAR JE IZMENJEN NE ZNA SE KAD I KAKO I KOLIKO ALI BILO KOJA KOMPONENTA KOJA SADA
KOMUNICIRA SA BILO ČIM (BILO KOJI PRAKTIČNI SLUČAJ) AKO NEMA SVE ATRIBUTE NA PUBLIC NEĆE RADITI
KAKO GA JE BOG ZAPOVEDIO

NIJE SAMO ZA KOMPONENTE KOJE PRIČAJU MEĐUSOBNO VEĆ ZA BILO KOJE PRISTUPANJE ATRIBUTIMA

BATALI PRIVATE KONCEPT U JS-U I NEK SVE BUDE PUBLIC


U pripremi za peti čas, da ne bi svako malo radio checkout na git-u dok eksperimentišem sa serverom,
wsL je wineService koji radi na osnovu definisane promenjive VINA a
wsH će biti wineService koji radi na serveru.Pisaću novi servis, iz prostog razloga da mogu da lakše
upoređujem razliku, kao i da testiram za greške ako nešto ne radi odma iz prve.
Već sam naučio da osim samog koda i izvršavanja, imam još jednog protivnika u razvojnom procesu:
SMRDLJIVI ANGULAR!!!
lakše je u implementacijama samo zakomentarisati jedan poziv a odkomentarisati drugi nego sve menjati,
sve opet pisati, proveravati itd. Ako radi, radi!
*/
// Importovan ruter zbog navigacije


// Prošao sam kroz skoro ceo projekat da sam jedva ispisao red komentara
// a sad kad radi sa serverom, moram da komentarišem
// ova komponenta kada okida onSubmit događaj, mora da se pretplaćuje, SUBSCRIBE, na događaje
// da čeka da se izvrši izmena ili dodavanje, i tek onda sme da rutira dalje
// jako loše objašnjeno na časovima, jako pokvareno od angulara što je tako
// dodat onDestroy da se spreči curenje memorije rapidno
//
//
// Moram da rešim problem rutiranja, jer kad ngOnDestroy radi, onda rutiranje blokira
