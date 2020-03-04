import { Wine } from "./wine.model";

export class WineSearchResult
{
    public count:number=0;
    public wines:Wine[]=[];

    constructor( p:any )
    {
        this.count= p && p.count || null;
        this.wines = p && p.results.map(x=>{ return new Wine(x)}) || [];
    }
}