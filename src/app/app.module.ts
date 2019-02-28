import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module'
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule }    from '@angular/common/http';
import providers from '@services'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers,//: [],
  bootstrap: [AppComponent]
})
export class AppModule { }