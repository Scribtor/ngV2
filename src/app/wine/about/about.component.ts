import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wcellar-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }

  callBackHome()
  {
    this.rt.navigate(['wines/']);
  }
}
