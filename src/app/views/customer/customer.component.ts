import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  id ;
  name;
  address;
  customers: any[] = [];
  cusId;
  cusName;
  cusAddress;
  constructor() { }

  ngOnInit(): void {
  }

  addDetails() {
    const row = {
      id: this.id,
      name: this.name,
      address: this.address
    };

    this.customers.push(row);
  }
  tableData(param: {id: string, name: string, address: string}) {
    this.id = param.id;
    this.name = param.name;
    this.address = param.address;
  }
  getValues(param: any) {
    param.id = this.cusId;
    param.name = this.cusName;
    param.address = this.cusAddress;
    console.log(    param.id);

  }

}
