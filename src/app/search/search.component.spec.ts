import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { VideoPreviewComponent } from '../shared/video-preview/video-preview.component';
import { PlaylistPreviewComponent } from '../shared/playlist-preview/playlist-preview.component'
import { ChannelComponent } from '../channel/channel.component';
import { SearchComponent } from '../search/search.component';
import { VideoComponent } from '../video/video.component';
import { ROUTES } from '../app-routing.module'
import { Router } from '@angular/router';
import { Location } from '@angular/common';


import {RouterTestingModule} from '@angular/router/testing';
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

import * as mockResponse from '@mocks/searchListResponse.json'


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VideoPreviewComponent,
        PlaylistPreviewComponent,
        ChannelComponent, //needed by the router
        VideoComponent, //needed by the router
        SearchComponent ],
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
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should hit the Search API endpoint on initialization (ngOnInit)', inject(
    [HttpTestingController, YoutubeService],
    (
      httpMock: HttpTestingController,
      youtubeService: YoutubeService
    ) => {

      expect(youtubeService).toBeTruthy();

      const compiled = fixture.debugElement.nativeElement;

      // component.ngOnInit();
      const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
        expect(req.url).toEqual(API_SEARCH);
        return true;
      });

      mockReq.flush(mockResponse);
      httpMock.verify();

    }));


    it('should hit the Search API endpoint when Route parameters change (updateRouteParams)', inject(
      [HttpTestingController, YoutubeService],
      (
        httpMock: HttpTestingController,
        youtubeService: YoutubeService
      ) => {
    
        let validator = (req: HttpRequest<any>) => {
          expect(req.url).toEqual(API_SEARCH);
          return true;
        };

        // expectOne on initialization/ngInit():
        const mockReq1 = httpMock.expectOne(validator);
        mockReq1.flush(mockResponse);
        httpMock.verify();

        fixture.whenStable().then(() => {

            component.query = 'HELLO NEW QUERY';
            component.updateRouteParams();

            const mockReq2 = httpMock.expectOne(validator);

            mockReq2.flush(mockResponse);
            httpMock.verify();
        });

      }));
});
