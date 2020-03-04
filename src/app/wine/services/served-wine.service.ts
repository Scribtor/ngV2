import { Injectable } from '@angular/core';
import { Wine } from '../model/wine.model'
import { VINA } from '../model/lokal_var';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators/";
import { WineSearchResult } from '../model/WineSearchResult'
import { Observable } from 'rxjs';

const baseUrl="http://localhost:3000/api/wines"

@Injectable({
  providedIn: 'root'
})
export class ServedWineService {
  constructor(private http:HttpClient) {

  }

  getData():Observable<WineSearchResult>
  {
    return this.http.get(baseUrl).pipe(map( x=> { return new WineSearchResult(x)}));
  }
}