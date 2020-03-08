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

// druga modelska klasa koja pretače originalni API get odgovor u posebnu klasu koja se dalje može
// pretakati u glavnu modelsku klasu i dalje koristiti 
// ništa drugo do primitivno sito za lakše praćenje koraka prilikom lova na greške