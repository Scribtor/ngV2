import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'wcellar-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
@Output() srch:EventEmitter<string>;
srchForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.srch=new EventEmitter();
    this.srchForm=fb.group({
      'srchTxt':''
    });
  }

  ngOnInit(): void {
  }

  pretraga()
  {
    this.srch.emit(this.srchForm.value.srchTxt);
  }
}
