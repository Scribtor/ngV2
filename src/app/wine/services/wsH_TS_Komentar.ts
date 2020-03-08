// Ovo je fajl za komentare gde ću pisati svoja opažanja prilikom izrade rukovanja sa serverom
// Budući da razumem malo servere, šta oni rade i kako, očekujem da će ovaj deo biti lakši
// nego što se predstavlja, ali rezervisao bih mišljenje...zasad

// Fajl koji mi je zadao mnogo muka, servis koji me je MNOGO naučio u jako kratkom vremenu
// Čak i preko i više nego što je predviđeno materijalom časa5 koji faktički još nije gotov
// Trenutni rezultat je da ovaj servis injektuje httpclient i poziva četiri osnovne metode http-a
// da dobavi svoje podatke
// za svaki mora da koristi SUBSCRIBE jer jebiga to tako mora i može da se jebeš ako ti nije pravo
// što za dalji rad znači da se ti objekti pretplate SUBCRIPTION, moraju presuti u nešto iskoristljivo
// klasičan primer je 
// 
// 
// data =>{}, // Ovaj blok koda se bavi time šta će se izvršiti KADA stignu podaci, tj kako pristižu
// kuda će program dalje s njima
// 
// 
// err=>{}, // Ovaj blok koda se bavi rukovanjem grešaka, odnosno ako u data bloku nešto pukne
// izvršava se blok koda ovde
// 
// 
// ()=>{} // Ovaj blok koda se izvršava, BEZ OBZIRA NA data i err stanja, odnosno kada je sama funkcija
// na samom kraju, pred izlazak iz bloka
// Ova bi se tri mogla uslovno rečeno posmatrati i kao try/catch/finally blok klasičnog rukovanja
// greškama u programu
// 
// baseUrl je zasad konstanta u sistemu spram koje se grade API pozivi za http metode u ovom servisu
// definicija sadržaja get/put/post/delete metoda http-a se menja i može se analizirati
// gledanjem u 
// ../../../../server/src/server.js
// ovo je putanja relativna u odnosu na ovaj fajl, u ovom projektu
// u tom fajlu se može pročitati vrlo brzo i pregledno kako treba da izgledaju ispravni API pozivi
// za svaku od metoda

// komentari da svaka od metoda radi su ispisani nakon testiranja. dokle god se API ne promeni
// ove metode će da rade