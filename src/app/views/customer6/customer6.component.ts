import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer6',
  templateUrl: './customer6.component.html',
  styleUrls: ['./customer6.component.css']
})
export class Customer6Component implements OnInit {

  myName="Rashmika";
  count=1225555;
  add="Monaragala";
  today=Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
