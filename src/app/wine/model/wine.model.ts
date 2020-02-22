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

const WINES = 
[
    {
        id: 1, 
        name: 'CHATEAU DE SAINT COSME', 
        year: 2009, 
        grapes: 'Grenache / Syrah', 
        country: 'France', 
        region: 'Southern Rhone / Gigondas', 
        description: 'The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.', 
        picture: 'saint_cosme.jpg'
    }, 
    
    {
        id: 2, 
        name: 'LAN RIOJA CRIANZA', 
        year: 2006, 
        grapes: 'Tempranillo', 
        country: 'Spain', 
        region: 'Rioja', 
        description: 'A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.', 
        picture: 'lan_rioja.jpg'
    }, 
    
    {
        id: 3, 
        name: 'MARGERUM SYBARITE', 
        year: 2010, 
        grapes: 'Sauvignon Blanc', 
        country: 'USA', 
        region: 'California Central Cosat', 
        description: 'The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of\\nblack cherry and licorice. This is a taste sure to transport you back in time.', 
        picture: 'margerum.jpg'
    }, 
    
    {
        id: 4, 
        name: 'OWEN ROE "EX UMBRIS"', 
        year: 2009, 
        grapes: 'Syrah', 
        country: 'USA', 
        region: 'Washington', 
        description: 'A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don\\\'t miss\\nthis award-winning taste sensation.', 
        picture: 'ex_umbris.jpg'
    },

    {
        id: 5, 
        name: 'REX HILL', 
        year: 2009, 
        grapes: 'Pinot Noir', 
        country: 'USA', 
        region: 'Oregon', 
        description: 'One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch\\nthe debut that everyone will be talking about tomorrow.', 
        picture: 'rex_hill.jpg'
    }, 
    
    {
        id: 6, 
        name: 'VITICCIO CLASSICO RISERVA', 
        year: 2007, 
        grapes: 'Sangiovese Merlot', 
        country: 'Italy', 
        region: 'Tuscany', 
        description: 'Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.', 
        picture: 'viticcio.jpg'
    }, 
    
    {
        id: 7, 
        name: 'CHATEAU LE DOYENNE', 
        year: 2005, 
        grapes: 'Merlot', 
        country: 'France', 
        region: 'Bordeaux', 
        description: 'Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the\\nsenses.', 
        picture: 'le_doyenne.jpg'
    }, 
    
    {
        id: 8, 
        name: 'DOMAINE DU BOUSCAT', 
        year: 2009, 
        grapes: 'Merlot', 
        country: 'France', 
        region: 'Bordeaux', 
        description: 'The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.', 
        picture: 'bouscat.jpg'
    }, 
    
    {
        id: 9, 
        name: 'BLOCK NINE', 
        year: 2009, 
        grapes: 'Pinot Noir', 
        country: 'USA', 
        region: 'California', 
        description: 'With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.', 
        picture: 'block_nine.jpg'
    }, 
    
    {
        id: 10, 
        name: 'DOMAINE SERENE', 
        year: 2007, 
        grapes: 'Pinot Noir', 
        country: 'USA', 
        region: 'Oregon', 
        description: 'Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.', 
        picture: 'domaine_serene.jpg'
    }, 
    
    {
        id: 11, 
        name: 'BODEGA LURTON', 
        year: 2011, 
        grapes: 'Pinot Gris', 
        country: 'Argentina', 
        region: 'Mendoza', 
        description: 'Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.', 
        picture: 'bodega_lurton.jpg'
    }, 
    
    {
        id: 12, 
        name: 'LES MORIZOTTES', 
        year: 2009, 
        grapes: 'Chardonnay', 
        country: 'France', 
        region: 'Burgundy', 
        description: 'Breaking the mold of the classics, this offering will surprise and\\nundoubtedly get tongues wagging with the hints of coffee and tobacco in\\nperfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.', 
        picture: 'morizottes.jpg'
    }
];
 
 export class Wine
{
    private _id:number;
    private name:string;
    private year:number;
    private grapes:string;
    private country:string;
    private region:string;
    private description:string;
    private picture:string;

    
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

// Ova klasa i konstruktor su dobar primer kako rukovati nepoznatim i nepredvidivim podacima na koje ne možemo uvek da utičemo. Ova klasa prima 8 atributa i njen konstruktor radi tako što prvo kaže da je njegov parametar opcioni, odnosno može i ne mora da prima parametar pri pozivanju.
// Ono što ovaj konstruktor koristi je prednost logičkog operatora && nad logičkim operatorom ||
// Vrednost atributa koje ovaj konstruktor postavlja zavisi od provere da li je prosleđeni parametar true (što je uvek tačno kada parametar nije NULL) i da li prosleđeni parametar je objekat sa traženim atributom
// Ako prosleđeni parametar nije objekat, ili nije objekat sa traženim atributom, vrednost atributa u konstruisanom objektu biće null, kao rezultat evaluacije logičkog izraza sa desne strane
// \\ Ono što MENI nije JASNO je ZAŠTO je uopšte ovakav izraz ISPRAVAN, jer logički operatori za rezultat imaju samo boolean vrednosti. Ako je ovaj izraz tačan, odnosno ako prosleđujemo objekte sa ispravnim tipom informacija, zar ovakav konstruktor ne bi trebalo da postavlja vrednosti u atributima na true,true,true,true??? Da li ovde postoji nešto što mi je promaklo, nešto što postoji neizrečeno? \\
// Odgovor: JS dozvoljava da kad se evaluiraju logički operatori, da kad naiđe na logički izraz koji zadovoljava, za logički && oba uslova ili za logički || operator, uzme vrednost desnog dela uslova. Potpuno nedosledno, nelogično i kretenski, ali ECMAScript dokumentacija kaže da je tako, i Bog. Mož' se jebeš ako ti se ne dopada. U ovakvom primeru, ako je objekat prosleđen i ima taj i taj atribut, vrednost atributa koji konstruktor postavlja biće vrednost tog ispravnog atributa koji se proveravao. Niđe mozga ni veze, ali bar sam proverio da nisam jedini kojem je to kretenski, ali šta je tu je.
// U ovom delu zadatka se postavlja model podataka za klasu vina koja će se kasnije koristiti. Vidi wine-list komponentu za dalje.