import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// @models & @services are aliases defined in tsconfig.json
import { YoutubeService } from '@services/youtube.service';
import {
  SearchResult,
  VideoListResponse,
  Video
} from '@models';

import * as moment from 'moment'

@Component({
  selector: 'app-video-preview',
  providers: [YoutubeService],
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {

  @Input() searchResultItem: SearchResult = null;
  fromNow = (isoDate: string) => (moment(isoDate).fromNow())

  video: Video = null
  viewCount: any = '';
  duration: string = '';

  constructor(
        private router: Router,
        private youtubeService: YoutubeService
  ) { }

  ngOnInit() {
    if (this.searchResultItem) {
      this.youtubeService
      .getVideo(this.searchResultItem.id.videoId)
      .subscribe((videoListResponse: VideoListResponse) => {
          let video = videoListResponse.items[0] as Video;
          let duration = video.contentDetails.duration.match(/PT(.*)M(.*)S/);
          let viewCount = video.statistics.viewCount;
          console.log('viewCount', viewCount)
          if (viewCount>=1000000) {
            this.viewCount = `${Math.round(viewCount/1000000)}M`;
          } else if (viewCount>=1000) {
            this.viewCount = `${Math.round(viewCount/1000)}K`;
          }
          console.log('viewCount', viewCount)
          if (duration) {
            this.duration = `${duration[1]}:${duration[2]}`
          }
      })
    }
  }

  goToRoute(path: string) {
    this.router.navigate([path]);
  }
}
