import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

import { ChannelComponent } from './channel.component';
import { SearchComponent } from '../search/search.component';
import { VideoComponent } from '../video/video.component';
import { VideoPreviewComponent } from '../shared/video-preview/video-preview.component';
import { PlaylistPreviewComponent } from '../shared/playlist-preview/playlist-preview.component'

import {RouterTestingModule} from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { HttpRequest } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from  '@angular/common/http/testing';
import { 
  YoutubeService,
  API_SEARCH,
  API_PLAYLIST,
  API_PLAYLIST_ITEM,
  API_VIDEOS,
  API_CHANNELS,
  API_CHANNEL_SECTION
} from '@services/youtube.service';

import * as mockResponse from '@mocks/channelListResponse.json'
import { ROUTES } from '../app-routing.module'

describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ 
        VideoPreviewComponent,
        PlaylistPreviewComponent,
        SearchComponent,
        VideoComponent,
        ChannelComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(ROUTES)
      ]
    })
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should extract channel Name, Banner, Logo & Subscribers data when directed to "channel/CHANNEL_ID" ', inject(
    [HttpTestingController, YoutubeService],
    (
      httpMock: HttpTestingController,
      youtubeService: YoutubeService
    ) => {

      router.navigate(['channel/CHANNEL_ID']);

      fixture.whenStable().then(() => {
        console.log('location.path()', location.path());

        expect(location.path()).toEqual('/channel/CHANNEL_ID');

        const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
          console.log('req.url', req.url);
          expect(req.url).toEqual(API_CHANNEL_SECTION);
          return true;
        });
  
        mockReq.flush(mockResponse);

        const mockReq2 = httpMock.expectOne((req: HttpRequest<any>) => {
          console.log('req.url', req.url);
          expect(req.url).toEqual(API_CHANNELS);
          return true;
        });

        mockReq2.flush(mockResponse);
        httpMock.verify();

        let banner = fixture.debugElement.query(By.css('banner'))//.nativeElement
        let logo = fixture.debugElement.query(By.css('logo'))//.nativeElement
        let channelName = fixture.debugElement.query(By.css('channel-name'))//.nativeElement
        let subscribers = fixture.debugElement.query(By.css('subscribers'))//.nativeElement

        console.log('banner', banner )
        console.log('logo', logo )
        console.log('channelName', channelName )
        console.log('subscribers', subscribers )

        expect(banner.nativeElement).toEqual('')
        expect(logo.nativeElement).toEqual('')
        expect(channelName.nativeElement).toEqual('')
        expect(subscribers.nativeElement).toEqual('')

      });

      // const compiled = fixture.debugElement.nativeElement;

      

      
// 
// 
// 
// 

    }));
});
