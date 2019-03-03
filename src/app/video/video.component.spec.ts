import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { VideoComponent } from './video.component';
import { SearchComponent } from '../search/search.component';
import { ChannelComponent } from '../channel/channel.component';
import {RouterTestingModule} from '@angular/router/testing';

import { ROUTES } from '../app-routing.module'
import { VideoPreviewComponent } from '../shared/video-preview/video-preview.component';
import { PlaylistPreviewComponent } from '../shared/playlist-preview/playlist-preview.component'
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

import * as mockResponse from '@mocks/video.json'

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VideoPreviewComponent,
        PlaylistPreviewComponent,
        SearchComponent,
        ChannelComponent,
        VideoComponent ],
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
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject(
    [HttpTestingController, YoutubeService],
    (
      httpMock: HttpTestingController,
      youtubeService: YoutubeService
    ) => {
    router.navigate(['video/VIDEO_ID']);

    

    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();

      expect(location.path()).toEqual('/video/VIDEO_ID');      

      const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
        expect(req.url).toEqual(API_VIDEOS);
        return true;
      });
  
      mockReq.flush(mockResponse);
      httpMock.verify();
      
    });

  }));
});
