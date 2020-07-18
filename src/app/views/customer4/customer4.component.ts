import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Customer} from "../../dto/customer";

@Component({
  selector: 'app-customer4',
  templateUrl: './customer4.component.html',
  styleUrls: ['./customer4.component.css']
})
export class Customer4Component implements OnInit {
  form=new FormGroup({
    id: new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern('(C00)[0-9]{1,2}')]),
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    address: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  customers: Customer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(cusId) {
    // console.log(cusId);
  }

  submitForm() {
    console.log(this.form);
    this.customers.push(this.form.value);
    // this.form.reset();
    // this.IDFocus.nativeElement.focus();

  }

  setValues(c: Customer) {

  }
  reset() {

  }
  get cusId(){
    return this.form.get("id");
  }
  get cstname(){
    return this.form.get("name");
  }
  get cusAdd(){
    return this.form.get("address");
  }
}
