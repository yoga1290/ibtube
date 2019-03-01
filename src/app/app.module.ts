import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module'
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule }    from '@angular/common/http';
import providers from '@services';
import { VideoComponent } from './video/video.component';
import { VideopreviewComponent } from './shared/videopreview/videopreview.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    VideoComponent,
    VideopreviewComponent
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
