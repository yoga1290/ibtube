import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistPreviewComponent } from './playlist-preview.component';
import {RouterTestingModule} from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import services from '@services';
// let providers: Provider[] = services;
let providers: any[] = services;
providers.push(HttpTestingController);

describe('PlaylistPreviewComponent', () => {
  let component: PlaylistPreviewComponent;
  let fixture: ComponentFixture<PlaylistPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistPreviewComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
