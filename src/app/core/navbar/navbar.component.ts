import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wcellar-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }

  callHome()
  {
    this.rt.navigate(['wines/']);
  }
  callEdit()
  {
    this.rt.navigate(['wines/add']);
  }
}
