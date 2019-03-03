import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { VideoComponent } from './video.component';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
