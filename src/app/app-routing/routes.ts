import { Routes } from "@angular/router";
import { WineListComponent } from '../wine/wine-list/wine-list.component';
import { EditWineComponent } from '../wine/edit-wine/edit-wine.component';
import { AboutComponent } from '../wine/about/about.component';

export const routes: Routes =
[
  {path: 'wines', component: WineListComponent},
  {path: 'wines/add', component: EditWineComponent},
  {path: 'about', component: AboutComponent},
  {path: 'wines/:id', component: EditWineComponent},
  {path: '', redirectTo: '/wines', pathMatch: 'full'}
];

  // Vrlo rudimentaran fajl
  // Importovan je ruter, kao i komponente koje podležu rutiranju
  // Podešene su adrese koje će se prikazivati kada se komponente smenjuju
  // Osnovna adresa je naravno prazna, i podešeno je da tada preusmerava na listu vina
