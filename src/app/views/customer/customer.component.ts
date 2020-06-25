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

  constructor() { }

  ngOnInit(): void {
  }

  addDetails() {
    // const row = {
    //   id: this.id,
    //   name: this.name,
    //   address: this.address
    // };

    this.customers.push(this.customers);
  }

  getValues(param: any) {
    this.id = param.id;
    this.name = param.name;
    this.address = param.address;


  }

  delete(c) {
    const index = this.customers.indexOf(c);
    this.customers.splice(index, 1);

  }
  update() {
    this.customers.map((c) => {
      if (c.id === this.id) {
        c.name = this.name;
        c.address = c.address;
      }
      return c;
    });
  }

}
