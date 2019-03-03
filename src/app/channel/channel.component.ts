import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// @services & @models are path aliases
import { YoutubeService } from '@services/youtube.service';
import {
  ChannelSectionListResponse,
  ChannelListResponse, 
  ChannelSection, 
  PlaylistItemListResponse, 
  PlaylistListResponse,
  Playlist
} from '@models'

@Component({
  selector: 'app-channel',
  providers: [YoutubeService],
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private youtubeService: YoutubeService
  ) { }

  keys = Object.keys

  channelSectionListResponse : ChannelSectionListResponse = null;
  channelListResponse: ChannelListResponse = null;
  // channelListResponse:any = MOCK_CHANNEL_LIST_RESPONSE;
  // channelSectionListResponse:any = MOCK_CHANNEL_SECTION;

  ngOnInit() {
    this.route.params.subscribe(({ channelId }) => {
      console.log('channel', channelId)
      if (channelId) {
        this.fetchChannelSection(channelId)
        this.fetchChannel(channelId)
      }
    });
  }

  fetchChannel(channelId: string) {
    this.youtubeService
    .getChannelList(channelId)
    .subscribe((channelListResponse: ChannelListResponse) => {
      this.channelListResponse = channelListResponse;
    })
  }

  fetchChannelSection(channelId: string) {
    this.youtubeService
    .getChannelSection(channelId)
    .subscribe((channelSectionListResponse: ChannelSectionListResponse) => {
      this.channelSectionListResponse = channelSectionListResponse;
      channelSectionListResponse.items.forEach(item => {
        console.log('item.contentDetails', item.contentDetails)
  
        if (item.contentDetails && item.contentDetails.playlists) {
          let { playlists } = item.contentDetails
          playlists.forEach(playlistId => this.fetchPlaylist(playlistId) )
        }
      });

    })
  }

  playlistById: ({} | {(k): Playlist}) = {};
  fetchPlaylist(playlistId: string) {
    this.playlistById = {};

    this.youtubeService
    .getPlaylist(playlistId)
    .subscribe((playlistListResponse: PlaylistListResponse) => {
      this.playlistById[playlistId] = playlistListResponse.items[0] as Playlist;
      console.log('playlist', playlistListResponse.items[0])
    })
  }

  fetchPlaylistItems(playlistId: string) {
    this.youtubeService
    .getPlaylistItems(playlistId)
    .subscribe((playlistItemListResponse: PlaylistItemListResponse) => {
      this.playlistById[playlistId] = playlistItemListResponse.items;
    })
  }
}
