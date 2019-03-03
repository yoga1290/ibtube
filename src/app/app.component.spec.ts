import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorConfig } from './HttpInterceptorConfig';
import { Provider } from '@angular/core';
import services from '@services';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { VideoPreviewComponent } from './shared/video-preview/video-preview.component';
import { ChannelComponent } from './channel/channel.component';
import { PlaylistPreviewComponent } from './shared/playlist-preview/playlist-preview.component'


// let providers: Provider[] = services;
let providers: any[] = services;
providers.push(HttpTestingController);

// providers.push({
//   multi: true,
//   provide: HTTP_INTERCEPTORS,
//   useClass: HttpInterceptorConfig
// });

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        VideoComponent,
        VideoPreviewComponent,
        ChannelComponent,
        PlaylistPreviewComponent
      ],
      providers
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ibtube'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ibtube');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ibtube!');
  // });
});
