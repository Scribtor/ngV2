import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() primljenBrojElemenataPoStranici:number;
  @Input() primljenUkupanBrojElemenata:number;
  constructor() 
  { 
  }

  ngOnInit(): void {
    // console.log(`Primio sam ${this.primljenBrojElemenataPoStranici} elemenata od winelistKomponente`);
    // console.log(`Primio sam ${this.primljenUkupanBrojElemenata} elemenata od winelistKomponente`);
    
  }
}
