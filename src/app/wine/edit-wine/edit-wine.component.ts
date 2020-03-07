import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Wine } from '../model/wine.model'
import { WineService } from '../services/wine.service'
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
  public vino: Wine;
  public vinoForm: FormGroup;
  constructor(private rt: Router, private fb: FormBuilder, private ws: WineService, private ar: ActivatedRoute) {
    this.makeForm();
    // Jel mogu validatore da koristim skraćeno, ili moram svaki put da kucam ručno?
  }
  ngOnInit(): void {
    // console.log(this.vino);
    this.vinoForm.reset();
    this.vino = this.vinoForm.value;
    let id: string = this.ar.snapshot.params.id;
    // console.log(`prosledio si wines/${id}`);
    if (id) {
      this.ws.dobaviPoID(Number(id)).subscribe(data => {
        this.vino = data; 
        this.vinoForm.patchValue(this.vino)
      });
    }

    // console.log(this.hasNumUpLow('PERA1C'));
    // console.log(this.vinoForm.status);
  }
  onSubmit() {
    let submit: Wine = new Wine(this.vinoForm.value);
    if (this.vino && this.vino.id) {
      submit.id = this.vino.id;
      this.ws.osveziVino(submit).subscribe(_=>{this.rt.navigate(['wines'])});
    } else {
      this.ws.dodajVino(submit).subscribe(_=>{this.rt.navigate(['wines'])});
    }
    // console.log(JSON.stringify(this.vino));
    // console.log(this.vino);
  }
  onRevert() {
    this.vinoForm.reset();
  }
  makeForm() {
    this.vinoForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        year: ['', [Validators.required, Validators.min(1900), Validators.max(2020)]],
        grapes: ['', [Validators.required]],
        country: ['', [Validators.required]],
        region: ['', [Validators.required]],
        description: ['', [Validators.required]]
      })
  }
  hasNumUpLow(p: string): boolean {
    if (p == null || p == "") {
      return false;
    }
    let flagNum: boolean = false;
    let flagUp: boolean = false;
    let flagLow: boolean = false;

    for (let i = 0; i < p.length; i++) {
      let x = Number(p[i])
      if (x) {
        flagNum = true;
        continue;
      } else if (p[i] == p[i].toUpperCase()) {
        flagUp = true;
        continue;
      }
      else if (p[i] === p[i].toLowerCase()) {
        flagLow = true;
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