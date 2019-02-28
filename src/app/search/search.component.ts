import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { map }                from 'rxjs/operators';

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
    private youtubeService:YoutubeService
  ) {
    console.log('SearchComponent.youtubeService', youtubeService)
  }


  // type: "video,channel,playlist" | "channel" | "playlist" = "video,channel,playlist",
  //   time: string | "TODAY" | "WEEK" | "MONTH" | "ANY" = "ANY",

  filters = {
    'type': {
      name: 'Type',
      options: [{
        label: 'Any',
        value: 'any'
      }, {
        label: 'Channel',
        value: 'channel'
      }, {
        label: 'Playlist',
        value: 'playlist'
      }]
    },
    'time': {
      name: 'Upload Date',
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
    }
  }

  ngOnInit() {
    
    let q, time, type;
    
    this.route.params.subscribe(params => {
      q = params['query']
      time = params['time']
      type = params['type']
    })

    // let q = this.route
    //   .queryParamMap
    //   .pipe(map(params => params.get('query') || ''));

    // let time = this.route
    //   .queryParamMap
    //   .pipe(map(params => params.get('time') || ''));
    
    // let type = this.route
    //   .queryParamMap
    //   .pipe(map(params => params.get('type') || ''));
    
    console.log('SearchComponent', 'ngOnInit', q, time, type)

    this.youtubeService
    .getSearchResult(q, null, type, time)
    .subscribe((data:any) => {
      console.log('OK', data);
    })
  }

}
