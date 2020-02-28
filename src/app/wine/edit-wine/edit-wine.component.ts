import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../model/wine.model';
import { FormGroup,FormBuilder } from "@angular/forms";
@Component({
  selector: 'wcellar-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.scss']
})
export class EditWineComponent implements OnInit {
  // public vino={
  //   name:"SeraFino",
  //   year:1991,
  //   grapes:"TruloUgaženo",
  //   country:"SRB",
  //   region:"TruliBalkan",
  //   description:"Evo neki proteritis od vina",
  //   picture:""
  //   };
  // Na greškama se uči. ngModel nije diran, ja nisam samo inicijalizova lokalne templejt promenjive
  public vino:Wine;
  public vinoForm:FormGroup;
  constructor(private rt: Router,private fb:FormBuilder) { }
  ngOnInit(): void {
    console.log(this.vino);
    
  }
  onSubmit()
  {
    console.log(JSON.stringify(this.vino));
    
  }
  makeForm()
  {
    this.vinoForm=this.fb.group(
      {
        ime:'',
        godina:null,
        sorta:'',
        zemlja:'',
        region:'',
        opis:''
      })
  }
}
// Importovan ruter zbog navigacije