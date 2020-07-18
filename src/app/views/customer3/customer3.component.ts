import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Customer} from '../../dto/customer';

@Component({
  selector: 'app-customer3',
  templateUrl: './customer3.component.html',
  styleUrls: ['./customer3.component.css']
})
export class Customer3Component implements OnInit {
@ViewChild('f') form: NgForm;
@ViewChild('cusIDFocus') IDFocus:ElementRef;

  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(cusId) {
    // console.log(cusId);
  }

  submitForm(form: NgForm) {
    console.log(form);
    this.customers.push(form.value);
    // this.form.reset();
    // this.IDFocus.nativeElement.focus();
    this.reset();
  }

  setValues(c: Customer) {

  }
  reset() {
    this.form.reset();
    this.IDFocus.nativeElement.focus();
  }
}
