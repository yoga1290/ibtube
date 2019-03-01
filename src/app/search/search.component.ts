import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';
import { map }                from 'rxjs/operators';
import { SearchListResponse } from '../../services/models/SearchListResponse'
// @services is an alias defined in tsconfig.json
// import { YoutubeService } from '@services/youtube.service'
import { YoutubeService } from '../../services/youtube.service'

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
    private youtubeService:YoutubeService
  ) {
    console.log('SearchComponent.youtubeService', youtubeService)
  }


  // type: "video,channel,playlist" | "channel" | "playlist" = "video,channel,playlist",
  //   time: string | "TODAY" | "WEEK" | "MONTH" | "ANY" = "ANY",
  log = console.log

  query = ''
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
  }

  keys = Object.keys
  searchListResponse: SearchListResponse = null
  
  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      ['time', 'type', 'order'].forEach(k => {
        this.filters[k].value = params[k]
      });
    })
    // this.fetch();
  }

  fetch() {
    let q = this.query;
    let type = this.filters['type'].value;
    let time = this.filters['time'].value;

    this.youtubeService
    .getSearchResult(q, null, type, time)
    .subscribe((searchListResponse: SearchListResponse) => {
      console.log('OK', searchListResponse.items[0].snippet.title);
      this.searchListResponse = searchListResponse
      // searchListResponse.items[0].snippet.title;
      // searchListResponse.items[0].snippet.channelTitle;
      // searchListResponse.items[0].snippet.description
      // searchListResponse.items[0].snippet.publishedAt
      // searchListResponse.items[0].snippet.thumbnails
      // searchListResponse.pageInfo.totalResults
    })
  }

  updateRouteParams() {
    let queryParams = {
      q: this.query
    }

    Object.keys(this.filters).forEach(k => {
      queryParams[k] = this.filters[k].value
    })
    
    this.router.navigate([], {
        relativeTo: this.route,
        queryParams, 
        queryParamsHandling: "merge"
    });
    
    // this.fetch();
  }

}
