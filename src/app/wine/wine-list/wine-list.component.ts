import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wcellar-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {
  @Input() private WineList: Wine;
  constructor() { 
    console.log(this.WineList);
  }

  ngOnInit(): void {
  }

}
