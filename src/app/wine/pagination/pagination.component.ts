import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() primljenBrojElemenataPoStranici:number;
  constructor() 
  {
    console.log(this.primljenBrojElemenataPoStranici);
    
  }
  ngOnInit(): void {
  }
}
