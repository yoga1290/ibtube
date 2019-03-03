import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {MaterialModule} from './material.module';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { VideoPreviewComponent } from './shared/video-preview/video-preview.component';
import { ChannelComponent } from './channel/channel.component';
import { PlaylistPreviewComponent } from './shared/playlist-preview/playlist-preview.component'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import services from '@services';
import { HttpInterceptorConfig } from './HttpInterceptorConfig';

let providers: Provider[] = services;
providers.push({
  multi: true,
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorConfig
});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    VideoComponent,
    VideoPreviewComponent,
    ChannelComponent,
    PlaylistPreviewComponent
  ],
  imports: [
    BrowserModule,
    // MaterialModule, //no material now; just SCSS :)
    HttpClientModule,
    AppRoutingModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
