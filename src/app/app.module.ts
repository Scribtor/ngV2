import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { TableComponent } from './wine/table/table.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    EditWineComponent,
    SearchFormComponent,
    TableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Ovo je sve sam Angular generisao.
// Moja jedina izmena je putanja sa koje zove AppModuleComponent 
// (originalno je bila $cwd/app-routing.module)

// FormsModule i ReactiveFormsModule snippeti za angular automatski imaju kao import deklaraciju --- vrlo zgodno