import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../../services/models/SearchListResponse'
@Component({
  selector: 'video-preview',
  templateUrl: './videopreview.component.html',
  styleUrls: ['./videopreview.component.scss']
})
export class VideopreviewComponent implements OnInit {

  @Input("video") searchResultItem: SearchResult = null;

  constructor() { }

  ngOnInit() {
  }

}
