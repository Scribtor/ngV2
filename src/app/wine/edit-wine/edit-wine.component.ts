import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../model/wine.model';
import { FormGroup,FormBuilder, Validators, NG_VALIDATORS } from "@angular/forms";
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
  constructor(private rt: Router,private fb:FormBuilder) 
  {
    this.makeForm();
    const vl=new Validators();
  }
  ngOnInit(): void {
    console.log(this.vino);
    
  }
  onSubmit()
  {
    // console.log(JSON.stringify(this.vino));
    console.log(this.vinoForm.value);
    this.vinoForm.reset();
    
    
  }
  makeForm()
  {
    this.vinoForm=this.fb.group(
      {
        ime:['',[Validators.required,Validators.minLength(2)]],
        godina:['',[Validators.min(1900),Validators.max(2020),(Validators.minLength(1)&&Validators.maxLength(5))]],
        sorta:'',
        zemlja:'',
        region:'',
        opis:''
      })
  }
}
// Importovan ruter zbog navigacije