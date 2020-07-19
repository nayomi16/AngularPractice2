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
    id: new FormControl('',[Validators.required]),
    userId: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required, Validators.minLength(4)]),
    body: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  pos: POS[] = [];

  constructor(private posService:PosService) { }

  ngOnInit(): void {
  }

  // save(cusId) {
  //   // console.log(cusId);
  // }

  getAllPos(){
    console.log(this.f);
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
  get id(){
    return this.form.get("id");
  }
  get userId(){
    return this.form.get("userId");
  }
  get title(){
    return this.form.get("title");
  }

  get body(){
    return this.form.get("body");
  }
  get f(){

    return this.form;

  }

  save(f:POS){
    this.posService.savePost(f).subscribe((res)=>{
      console.log(res,"res")
    });
}

}
