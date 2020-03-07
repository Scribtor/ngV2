import { Injectable } from '@angular/core';
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
  constructor(private http:HttpClient) {}

  getData():Observable<WineSearchResult>
  {
    return this.http.get(baseUrl).pipe(map( x=> { return new WineSearchResult(x)}));
  }//dobavljanje radi

  putData(p:Wine):Observable<Wine>
  {
    return this.http.put(baseUrl+"/"+p._id,p).pipe(map(x=> {return new Wine(x)}));
  }
  postData(p:Wine):Observable<Wine>
  {
    return this.http.post(baseUrl,p).pipe(map(x =>{return new Wine(x)}));
  }//dodavanje radi
  deleteData(p:number):Observable<Wine>
  {
    return this.http.delete(`${baseUrl}/${p}`).pipe(map(x =>{return new Wine(x)}));
  }//brisanje radi

  getById(id :number):Observable<Wine> {
    return this.http.get(baseUrl + "/" + id).pipe(map(x => { return new Wine(x)}));
  }
}