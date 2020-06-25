import { Component, OnInit } from '@angular/core';
import {Customer} from '../../dto/customer';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.css']
})
export class Customer2Component implements OnInit {

 customer: Customer = new Customer();
  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addDetails() {
    const newcustomer = Object.assign({}, this.customer);
    this.customers.push(newcustomer);
  }

  getValues(param: Customer) {
    this.customer = param;


  }

  delete(c: Customer) {
    const index = this.customers.indexOf(c);
    this.customers.splice(index, 1);

  }
   update() {
  //   this.customers.map((c) => {
  //     if (c.id === this.id) {
  //       c.name = this.name;
  //       c.address = c.address;
  //     }
  //     return c;
  //   });

     this.customer = new Customer();
   }


}
