import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// @env is an alias defined in tsconfig.json
import { environment } from '@env'

console.log('YoutubeService', environment)

const { key } = environment.YOUTUBE_API;

console.log('YoutubeService', key)

//https://angular.io/guide/hierarchical-dependency-injection#ngmodule-level-injectors
@Injectable({
  providedIn: 'root' //AppModule
})
export class YoutubeService {

  constructor(
    private http: HttpClient
  ) { }

  

  // https://developers.google.com/youtube/v3/docs/search/list
  getSearchResult() : Observable<any> {

    console.log('getSearchResult')
    
    let order = 'relevance'

    let params = {
      part: [
        "order"
      ].join(','), //channelId , order
      key,
      order
    }

    // console.log('params', params)

    return this.http.get<any>(
          "https://www.googleapis.com/youtube/v3/search", {
            params
          }).pipe();
  }
}
