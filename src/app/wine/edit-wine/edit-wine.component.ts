import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Wine } from '../model/wine.model'
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
    // console.log(this.vino);
    this.vinoForm.reset();
    this.vino=this.vinoForm.value;
    // console.log(this.hasNumUpLow('PERA1C'));
    // console.log(this.vinoForm.status);
  }
  onSubmit()
  {
    this.vino=this.vinoForm.value;
    // console.log(JSON.stringify(this.vino));
    console.log(this.vino);
    this.vinoForm.reset();
  }
  onRevert()
  {
    this.vinoForm.reset();
  }
  makeForm()
  {
    this.vinoForm=this.fb.group(
      {
        name:['',[Validators.required,Validators.minLength(2)]],
        year:['',[Validators.required,Validators.min(1900),Validators.max(2020)]],
        grapes:['',[Validators.required]],
        country:['',[Validators.required]],
        region:['',[Validators.required]],
        description:['',[Validators.required]]
      })
  }
  hasNumUpLow(p:string):boolean
  {
    if (p==null || p=="") {
      return false;
    }
    let flagNum:boolean=false;
    let flagUp:boolean=false;
    let flagLow:boolean=false;
    
    for (let i = 0; i < p.length; i++) 
    {
      let x = Number(p[i])
      if (x) {
        flagNum=true;
        continue;
      } else if (p[i]==p[i].toUpperCase())
      {
        flagUp=true;
        continue;
      }
      else if(p[i]===p[i].toLowerCase())
      {
        flagLow=true;
        continue;
      }
    }
    return flagNum && flagUp && flagLow;
  }
  // refreshBtn()
  // {
  //   let btn:HTMLButtonElement=document.getElementById('btn1') as HTMLButtonElement;
  //   console.log(this.vinoForm.invalid);
  //   console.log(this.hasNumUpLow(this.vinoForm.controls.region.value));
  //   console.log(this.vinoForm.controls.region.value);
  //   btn.disabled=!(this.hasNumUpLow(this.vinoForm.controls.region.value))||this.vinoForm.invalid;
  // }
}
// Importovan ruter zbog navigacije