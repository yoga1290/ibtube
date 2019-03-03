import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
// @models & @services are aliases defined in tsconfig.json
import { YoutubeService, ORDER, TYPE, TIME } from '@services/youtube.service';
import {
  SearchResult,
  SearchListResponse,
  PlaylistItem } from '@models';

@Component({
  selector: 'app-search',
  providers: [YoutubeService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private youtubeService: YoutubeService
  ) {
    console.log('SearchComponent.youtubeService', youtubeService);
  }


  // type: "video,channel,playlist" | "channel" | "playlist" = "video,channel,playlist",
  //   time: string | "TODAY" | "WEEK" | "MONTH" | "ANY" = "ANY",
  log = console.log;

  query: string = '';
  filters = {
    type: {
      name: 'Type',
      value: null,
      options: [{
        label: 'Any',
        value: 'video,channel,playlist'
      }, {
        label: 'Channel',
        value: 'channel'
      }, {
        label: 'Playlist',
        value: 'playlist'
      }]
    },
    time: {
      name: 'Upload Date',
      value: null,
      options: [{
        label: 'today',
        value: 'TODAY'
      }, {
        label: 'This week',
        value: 'WEEK'
      }, {
        label: 'This month',
        value: 'MONTH'
      }]
    },
    order: {
      name: 'Order',
      value: 'relevance',
      options: [{
        label: 'Relevance',
        value: 'relevance'
      }, {
        label: 'Upload date',
        value: 'date'
      }, {
        label: 'View count',
        value: 'viewCount'
      }, {
        label: 'Rating',
        value: 'rating'
      }]
    }
  };

  keys = Object.keys;
  showFilters: boolean = false;
  searchListResponse: SearchListResponse = null;
  // searchListResponse: any = MOCK_SEARCH;

  ngOnInit() {

    // this will be triggered when params change anytime later:
    this.route.queryParams.subscribe(params => {
      this.query = params.q;
      ['time', 'type', 'order'].forEach(k => {
        this.filters[k].value = params[k] ? params[k]:this.filters[k].value;
      });
      this.fetch();
    });
    
  }

  fetch() {
    const q = this.query;
    const type = this.filters.type.value as TYPE;
    const time = this.filters.time.value as TIME;
    const order = this.filters.order.value as ORDER;

    this.youtubeService
    .getSearchResult(order, type, q, time)
    .subscribe((searchListResponse: SearchListResponse) => {
      this.searchListResponse = searchListResponse;
    });
  }

  isPlaylist(item: SearchResult) {
    return item.id.kind === 'youtube#playlist'
  }

  updateRouteParams() {
    const queryParams = {
      q: this.query
    };

    Object.keys(this.filters).forEach(k => {
      queryParams[k] = this.filters[k].value;
    });

    this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
    });
  }

}
