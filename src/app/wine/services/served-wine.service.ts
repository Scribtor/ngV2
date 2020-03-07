import { Injectable } from '@angular/core';
// import { Wine } from '../model/wine.model'
// import { VINA } from '../model/lokal_var';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators/";
import { WineSearchResult } from '../model/WineSearchResult'
import { Observable } from 'rxjs';
import { WineService } from './wine.service';
import { Wine } from '../model/wine.model';

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

  putData(p:Wine)
  {
    this.http.put(baseUrl,p);
  }
  postData(p:Wine)
  {
    this.http.post(baseUrl,p);
  }
  deleteData(p:number)
  {
    this.http.delete(`${baseUrl}/${p}`);
  }

}