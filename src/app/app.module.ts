import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './views/customer/customer.component';
import { Customer2Component } from './views/customer2/customer2.component';
import { Customer3Component } from './views/customer3/customer3.component';
import { Customer4Component } from './views/customer4/customer4.component';
import { Customer5Component } from './views/customer5/customer5.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    Customer2Component,
    Customer3Component,
    Customer4Component,
    Customer5Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
