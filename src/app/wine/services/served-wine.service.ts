import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators/";
import { WineSearchResult } from '../model/WineSearchResult'
import { Observable } from 'rxjs';
import { Wine } from '../model/wine.model';

const baseUrl="http://localhost:3000/api/wines"

@Injectable({
  providedIn: 'root'
})
export class ServedWineService {
  constructor(private http:HttpClient) {}

  getData(p?:any):Observable<WineSearchResult>
  {
    let qP ={};
    if (p) 
    {
      qP={
        p: new HttpParams().set('sort',p.sort || "")
                           .set('sortDirection',p.sortDirection || "")
                           .set('page',p.page && p.page.toString() || "")
                           .set('pageSize',p.pageSize && p.pageSize.toString() || "")
                           .set('filter',p.filter && JSON.stringify(p.filter) || "")
      }  
    }
    console.log(qP);
    return this.http.get(baseUrl,qP).pipe(map( x=> { return new WineSearchResult(x)}));
  }//dobavljanje radi
  // Izmenio da prima parametre za server, ne razumem odakle sve ove konstrukcije

  putData(p:Wine):Observable<Wine>
  {
    return this.http.put(baseUrl+"/"+p._id,p).pipe(map(x=> {return new Wine(x)}));
  }//izmena radi
  postData(p:Wine):Observable<Wine>
  {
    return this.http.post(baseUrl,p).pipe(map(x =>{return new Wine(x)}));
  }//dodavanje radi
  deleteData(p:number):Observable<Wine>
  {
    return this.http.delete(baseUrl+"/"+p).pipe(map(x =>{return new Wine(x)}));
  }//brisanje radi

  getById(id :number):Observable<Wine> {
    return this.http.get(baseUrl + "/" + id).pipe(map(x => { return new Wine(x)}));
  }

}