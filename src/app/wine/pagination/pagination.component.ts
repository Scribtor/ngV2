import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wcellar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
@Input() totalItems: number;
@Input() pageSize:number;
@Output() onPageSel: EventEmitter<number>;
pages:number[];
selPage:number=1;

  constructor() {
    this.onPageSel = new EventEmitter;
   }


	public getPageNo() :number
	{
		return Math.ceil(this.totalItems/this.pageSize);
  }

  pageSel(newP: number)
  {
    if (newP>=1 && newP<= this.getPageNo()) {
      this.selPage=newP;
      this.onPageSel.emit(newP);
    }
    console.log(`Active page set to: ${this.selPage}`);
  }
  getPages(){
    this.pages=[];
    for (let i = 0; i < this.getPageNo(); i++) {
      this.pages.push(i+1);
    }
  }
  ngOnInit(): void {
    this.getPages();
  }

}
