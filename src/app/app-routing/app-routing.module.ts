import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';


// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Ovde nema apsolutno nikakvih dešavanja zasad osim što je router modul uključen
// Ponavljam, ja sam prilikom generisanja aplikacije dao custom argument --routing 
// Angular je SAM definisao ovaj fajl, gde sam ja dopunio samo sa importom svog routes.ts fajla
// I smeštanjem ovog fajla i routes.ts u poseban podfolder, i regulisanjem putanja u glavnom fajlu app.module.ts 
