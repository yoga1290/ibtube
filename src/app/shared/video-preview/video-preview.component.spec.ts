import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPreviewComponent } from './video-preview.component';
import {RouterTestingModule} from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import services from '@services';
// let providers: Provider[] = services;
let providers: any[] = services;
providers.push(HttpTestingController);

describe('VideopreviewComponent', () => {
  let component: VideoPreviewComponent;
  let fixture: ComponentFixture<VideoPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPreviewComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
