import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// @env is an alias defined in tsconfig.json
import { environment } from '@env'
// import { SearchQuery } from './models/SearchQuery'
// import { SearchListResponse } from './models/SearchListResponse'

console.log('YoutubeService', environment)

const { key } = environment.YOUTUBE_API;
const headers = new HttpHeaders({
  key,
  'Content-Type':  'application/json'
});

console.log('YoutubeService', key)

//https://angular.io/guide/hierarchical-dependency-injection#ngmodule-level-injectors
@Injectable({
  providedIn: 'root' //AppModule
})
export class YoutubeService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResult(
    q?:string,
    channelId?:string,
    type: string | "any" | "channel" | "playlist" = "video,channel,playlist",
    time: string | "TODAY" | "WEEK" | "MONTH" | "ANY" = "ANY",
    order:string = 'relevance') : Observable<any> {

    let part = ['snippet'].join(',')
    let publishedBefore = {
      ANY: undefined,
      TODAY: 24*60*60*1000,
      WEEK: 7*24*60*60*1000,
      MONTH: 30*24*60*60*1000
    }[time.toUpperCase()];

    type = (type.toLowerCase()!=='any') ? type.toLowerCase():'video,channel,playlist';
    let query = {
      type,
      part,
      order,
      publishedBefore
    }

    let params = { key }
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]))

    // console.log('params', params)
    return this.http.get<any>(
          "https://www.googleapis.com/youtube/v3/search", {
            params,
            headers
          }).pipe();
  }
}
