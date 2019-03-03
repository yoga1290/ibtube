import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// @models & @services are aliases defined in tsconfig.json
import { YoutubeService } from '@services/youtube.service';
import { VideoListResponse, Video } from '@models'
import * as moment from 'moment'

@Component({
  selector: 'app-video',
  providers: [YoutubeService],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  format = (isoDate: string) => (moment(isoDate).format('ll'))
  videoId: string = null;
  video: Video = null;

  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({ videoId }) => {
      if (videoId) {

        this.videoId = videoId;
        this.initYTPlayer(videoId);
        this.youtubeService
        .getVideo(videoId)
        .subscribe((videoListResponse: VideoListResponse) => {
          console.log('videoListResponse', videoListResponse)
          this.video = videoListResponse.items[0] as Video;
        });
      }
    });
  }

  goToRoute(path: string) {
    this.router.navigate([path]);
  }

  // see https://developers.google.com/youtube/player_parameters#IFrame_Player_API
  initYTPlayer(videoId: string) {
      // Replace the 'ytplayer' element with an <iframe> and
      // YouTube player after the API code downloads.
      var player;
      window['onYouTubePlayerAPIReady'] = () => {
        player = new window['YT'].Player('ytplayer', {
          // height: '360',
          // width: '640',
          videoId
        });
      }
      // Load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

}
