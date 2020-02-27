import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../model/wine.model'

@Component({
  selector: 'wcellar-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.scss']
})
export class EditWineComponent implements OnInit {
  public vino={
    _id:13,
    country:"SRB",
    description:"Evo neki proteritis od vina",
    grapes:"TruloUgaženo",
    name:"SeraFino",
    picture:"",
    region:"TruliBalkan",
    year:1991};

  constructor(private rt: Router) { }
  ngOnInit(): void {
    console.log(this.vino);
    console.log(1);
    
  }
  onSubmit()
  {
    console.log(JSON.stringify(this.vino));
    
  }

}
// Importovan ruter zbog navigacije