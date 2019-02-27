import { Component, OnInit } from '@angular/core';

// @services is an alias defined in tsconfig.json
import { YoutubeService } from '@services/youtube.service'

@Component({
  selector: 'app-search',
  providers: [YoutubeService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  constructor(
    private youtubeService:YoutubeService
  ) {
    console.log('SearchComponent.youtubeService', youtubeService)
  }

  ngOnInit() {
    console.log('SearchComponent', 'ngOnInit')
    this.youtubeService
    .getSearchResult()
    .subscribe((data:any) => {
      console.log('OK', data);
    })
  }

}
