import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './views/customer/customer.component';
import { Customer2Component } from './views/customer2/customer2.component';
import { Customer3Component } from './views/customer3/customer3.component';
import { Customer4Component } from './views/customer4/customer4.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    Customer2Component,
    Customer3Component,
    Customer4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
