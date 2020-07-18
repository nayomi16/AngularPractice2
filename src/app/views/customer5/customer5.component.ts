import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../dto/customer";
import {HttpClient} from "@angular/common/http";
import {POS} from "../../dto/pos";
import {PosService} from "../../services/pos.service";


@Component({
  selector: 'app-customer5',
  templateUrl: './customer5.component.html',
  styleUrls: ['./customer5.component.css']
})
export class Customer5Component implements OnInit {

  form=new FormGroup({
    id: new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern('(C00)[0-9]{1,2}')]),
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    address: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  pos: POS[] = [];

  constructor(private posService:PosService) { }

  ngOnInit(): void {
  }

  save(cusId) {
    // console.log(cusId);
  }

  getAllPos(){
    this.posService.getAllPos().subscribe((res)=>{
      this.pos=res;
    });
  }
  submitForm() {
    console.log(this.form);
    // this.pos.push(this.form.value);
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
  get f(){
    return this.form;
  }

}
