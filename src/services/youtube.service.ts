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

  private headers = new HttpHeaders({
        key,
        'Content-Type':  'application/json'
      });  

  // https://developers.google.com/youtube/v3/docs/search/list
  getSearchResult(
    channelId?:string,// = undefined,
    order:string = 'relevance') : Observable<any> {

    console.log('getSearchResult', {channelId})

    let query = {
      channelId
    }
    
    let part = [
      'snippet',
      ...Object.keys(query)
      .filter(k=>query[k])
       //to avoid keys w undefined values
    ].join(',')

    let params = {
      part,
      key,
      order
    }

    // console.log('params', params)
    let headers = this.headers
    return this.http.get<any>(
          "https://www.googleapis.com/youtube/v3/search", {
            params,
            headers
          }).pipe();
  }
}
