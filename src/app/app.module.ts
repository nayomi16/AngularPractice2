import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CustomerComponent } from './views/customer/customer.component';
import { Customer2Component } from './views/customer2/customer2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    Customer2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
