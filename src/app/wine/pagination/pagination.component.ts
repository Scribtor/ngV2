import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
@Input() totalItems: number;
@Input() pageSize:number;
pages:number[];

  constructor() { }


	private getPageNo() :number
	{
		return Math.ceil(this.totalItems/this.pageSize);
	}
  ngOnInit(): void {
    this.pages=[];
    for (let i = 0; i < this.getPageNo.length; i++) {
      this.pages.push(i);
    }
  }

}
