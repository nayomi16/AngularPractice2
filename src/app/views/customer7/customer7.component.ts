import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-customer7',
  templateUrl: './customer7.component.html',
  styleUrls: ['./customer7.component.css']
})
export class Customer7Component implements OnInit {

  @Input() CusID;
  @Input() CusName;
  @Input() CusAddress;

   // @Input() abc;
  constructor() { }

  ngOnInit(): void {
  }

}
