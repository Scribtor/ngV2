// tslint:disable: one-line
// tslint:disable: eofline
// tslint:disable: no-trailing-whitespace
// tslint:disable: max-line-length
// tslint:disable: whitespace
// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: typedef-whitespace
// tslint:disable: variable-name
// tslint:disable: align
// tslint:disable: indent 
 export class Wine
{
    public _id: number;
    public name: string;
    public year: number;
    public grapes: string;
    public country: string
    public region: string
    public description: string
    public picture: string

    
    constructor(obj?: any) 
    {
		this._id = obj && obj._id || null;
		this.name = obj && obj.name || null;
    this.year = obj && obj.year || null;
		this.grapes = obj && obj.grapes || null;
		this.country = obj && obj.country || null;
		this.region = obj && obj.region || null;
		this.description = obj && obj.description || null;
		this.picture = obj && obj.picture || null;
    }
    
}

// U zaglavlju ovog fajla su raznorazne tsLint komande za isključivanje iritantnih žutih linija
// ionako je samo važno da đubre radi, a ja svakako pišem dovoljno pregledno i sa dovoljno proreda
// moj je problem što ja pravim i previše proreda ponekad i ponegde, i onda me tsLint smara