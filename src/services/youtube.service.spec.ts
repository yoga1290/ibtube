import { TestBed, inject } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { 
  YoutubeService,
  API_SEARCH,
  API_PLAYLIST,
  API_PLAYLIST_ITEM,
  API_VIDEOS,
  API_CHANNELS,
  API_CHANNEL_SECTION
} from './youtube.service';
import {
  VideoListResponse,
  ChannelSectionListResponse
} from '@models'

import {
  HttpClientTestingModule,
  HttpTestingController
} from  '@angular/common/http/testing';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

const mockResponse = require('./mocks/channelSection.json');

describe('YoutubeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YoutubeService]
    })
    // // injector = getTestBed();
    // service = TestBed.get(YoutubeService);
    // httpMock = TestBed.get(HttpTestingController);
    // console.log('LOG: YoutubeService:beforeEach', service, httpMock)
  });

  it('should hit the ChannelSections API endpoint', inject(
    [HttpTestingController, YoutubeService],
    (
      httpMock: HttpTestingController,
      youtubeService: YoutubeService
    ) => {

      expect(youtubeService).toBeTruthy();

      youtubeService.getChannelSection("channelId").subscribe();

      const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
        expect(req.url).toEqual(API_CHANNEL_SECTION);
        return true;
      });

      mockReq.flush(mockResponse);
      httpMock.verify();

    }));



    it('should hit the Channel API endpoint', inject(
    [HttpTestingController, YoutubeService],
    (
      httpMock: HttpTestingController,
      youtubeService: YoutubeService
    ) => {

      expect(youtubeService).toBeTruthy();

      youtubeService.getChannelList("channelId").subscribe();

      const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
        expect(req.url).toEqual(API_CHANNELS);
        // expect(req.body).toEqual(mockResponse);
        return true;
      });

      mockReq.flush(mockResponse);
      httpMock.verify();

    }));


    it('should hit the Playlist API endpoint', inject(
      [HttpTestingController, YoutubeService],
      (
        httpMock: HttpTestingController,
        youtubeService: YoutubeService
      ) => {
  
        expect(youtubeService).toBeTruthy();
  
        youtubeService.getPlaylist("id").subscribe();
  
        const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
          expect(req.url).toEqual(API_PLAYLIST);
          return true;
        });
  
        mockReq.flush(mockResponse);
        httpMock.verify();
  
      }));

    it('should hit the Playlist Items API endpoint', inject(
      [HttpTestingController, YoutubeService],
      (
        httpMock: HttpTestingController,
        youtubeService: YoutubeService
      ) => {
  
        expect(youtubeService).toBeTruthy();
  
        youtubeService.getPlaylistItems("id").subscribe();
  
        const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
          expect(req.url).toEqual(API_PLAYLIST_ITEM);
          return true;
        });
  
        mockReq.flush(mockResponse);
        httpMock.verify();
  
      }));

    it('should hit the Search API endpoint', inject(
      [HttpTestingController, YoutubeService],
      (
        httpMock: HttpTestingController,
        youtubeService: YoutubeService
      ) => {
  
        expect(youtubeService).toBeTruthy();
  
        youtubeService.getSearchResult('relevance', 'video,channel,playlist').subscribe();
  
        const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
          expect(req.url).toEqual(API_SEARCH);
          return true;
        });
  
        mockReq.flush(mockResponse);
        httpMock.verify();
  
      }));

    it('should hit the Video API endpoint', inject(
      [HttpTestingController, YoutubeService],
      (
        httpMock: HttpTestingController,
        youtubeService: YoutubeService
      ) => {
  
        expect(youtubeService).toBeTruthy();
  
        youtubeService.getVideo('videoId').subscribe();
  
        const mockReq = httpMock.expectOne((req: HttpRequest<any>) => {
          expect(req.url).toEqual(API_VIDEOS);
          return true;
        });
  
        mockReq.flush(mockResponse);
        httpMock.verify();
  
      }));
});
