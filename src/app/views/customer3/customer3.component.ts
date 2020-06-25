import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Customer} from '../../dto/customer';

@Component({
  selector: 'app-customer3',
  templateUrl: './customer3.component.html',
  styleUrls: ['./customer3.component.css']
})
export class Customer3Component implements OnInit {
@ViewChild('f') f: NgForm
  customers: Customer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  save(cusId) {
    // console.log(cusId);
  }

  submitForm(form: NgForm) {
    console.log(form.value);
    this.customers.push(form.value);
  }

  setValues(c: Customer) {
      this.f.setValue(c);
  }
}
