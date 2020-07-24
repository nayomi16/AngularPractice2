import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-customer7',
  templateUrl: './customer7.component.html',
  styleUrls: ['./customer7.component.css']
})
export class Customer7Component implements OnInit {

  @Input() CusID;
  @Input() CusName;
  @Input() CusAddress;
  @Output() detailsChanged=new EventEmitter();
   // @Input() abc;
  constructor() { }

  ngOnInit(): void {
  }
  selectDetails(CusID){
    this.detailsChanged.emit(CusID);

  }
}
