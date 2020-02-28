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
    
    // Jel mogu validatore da koristim skraćeno, ili moram svaki put da kucam ručno?
  }
  ngOnInit(): void {
    console.log(this.vino);
    console.log(this.customValidity('peraa1D'));
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
        godina:['',[Validators.min(1900),Validators.max(2020)]],
        sorta:['',[Validators.required]],
        zemlja:['',[Validators.required]],
        region:['',[Validators.required]],
        opis:['',[Validators.required]]
      })
  }
  customValidity(p:string):boolean
  {
    let flagNum:boolean=false;
    let flagUp:boolean=false;
    let flagLow:boolean=false;
    for (let i = 0; i < p.length; i++) 
    {
      if (Number(p[i]) === Number(p[i]))
      {
        flagNum=true;
      }
    }
    for (let j = 0; j < p.length; j++) 
    {
      if (p[j]===p[j].toUpperCase()) 
      {
        flagUp=true;
      }
    }
    for (let k = 0; k < p.length; k++) 
    {
      if (p[k]===p[k].toLowerCase()) 
      {
        flagLow=true;
      }
    }
    console.log(flagNum);
    console.log(flagUp);
    console.log(flagLow);
    
    
    
    return flagNum && flagUp && flagLow;
  }
}
// Importovan ruter zbog navigacije