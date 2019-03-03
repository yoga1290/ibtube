import { Component, OnInit, Input } from '@angular/core';
import {
  Playlist,
  SearchResult,
  PlaylistListResponse
} from '@models';
import { YoutubeService } from '@services/youtube.service'
import { Router } from '@angular/router';

import * as moment from 'moment'
@Component({
  selector: 'app-playlist-preview',
  templateUrl: './playlist-preview.component.html',
  styleUrls: ['./playlist-preview.component.scss']
})
export class PlaylistPreviewComponent implements OnInit {

  @Input() playlist: Playlist = null;
  @Input() searchResult: SearchResult = null;

  constructor(
            private router: Router,
    private youtubeService: YoutubeService
  ) { }  
  ngOnInit() {
    // coming from a search query:
    if (this.searchResult) {
      let playlistId = this.searchResult.id.playlistId;
      this.youtubeService
      .getPlaylist(playlistId)
      .subscribe((playlistListResponse : PlaylistListResponse) => {
        this.playlist = playlistListResponse.items[0]
      })
    }
    console.log('PlaylistPreviewComponent', this.playlist)
  }

  fromNow = (isoDate: string) => (moment(isoDate).fromNow())

  goToRoute(path: string) {
    this.router.navigate([path]);
  }
}
