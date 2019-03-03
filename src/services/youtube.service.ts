import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// @env is an alias defined in tsconfig.json
import { environment } from '@env';
// import { SearchQuery } from './models/SearchQuery'

import { ErrorResponse } from './models/ErrorResponse'
import { SearchListResponse } from './models/SearchListResponse';
import { PlaylistListResponse } from './models/PlaylistListResponse';
import { PlaylistItemListResponse } from './models/PlaylistItemListResponse'
import { ChannelSectionListResponse } from './models/ChannelSectionListResponse'
import { VideoListResponse } from './models/VideoListResponse'
import { ChannelListResponse } from './models/ChannelListResponse'

interface Service {
  
  getSearchResult(
      order: ORDER,
      type: TYPE,
      q?: string,
      // channelId?: string,
      time?: TIME)
    : Observable<SearchListResponse | ErrorResponse>;

  getPlaylist(
    id?: string,
    channelId?: string
    )
    : Observable<PlaylistListResponse | ErrorResponse>;
  
  getPlaylistItems(
    playlistId?: string,
    id?: string)
    : Observable<PlaylistItemListResponse | ErrorResponse>;

  getChannelSection(
    channelId?: string,
    id?: string)
    : Observable<ChannelSectionListResponse | ErrorResponse>;

  getVideo(
    id?: string,
    chart?: "mostPopular",
    )
    : Observable<VideoListResponse | ErrorResponse>;
  
  getChannelList(
    id?: string,
    categoryId?: string,
    forUsername?: string,
    managedByMe?: boolean,
    mine?: boolean,
    mySubscribers?: boolean
    )
    : Observable<ChannelListResponse | ErrorResponse>;
}
export const API_SEARCH = "https://www.googleapis.com/youtube/v3/search";
export const API_PLAYLIST = 'https://www.googleapis.com/youtube/v3/playlists';
export const API_PLAYLIST_ITEM = 'https://www.googleapis.com/youtube/v3/playlistItems';
export const API_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';
export const API_CHANNELS = 'https://www.googleapis.com/youtube/v3/channels';
export const API_CHANNEL_SECTION = 'https://www.googleapis.com/youtube/v3/channelSections';

export type ORDER = 'relevance' | 'date' | 'viewCount' | 'rating'
export type TYPE = 'channel' | 'playlist' | 'video,channel,playlist'
export type TIME = 'TODAY' | 'WEEK' | 'MONTH'

const { key } = environment.YOUTUBE_API;
const headers = new HttpHeaders({
  key,
  'Content-Type':  'application/json'
});

// https://angular.io/guide/hierarchical-dependency-injection#ngmodule-level-injectors
@Injectable({
  providedIn: 'root' // AppModule
})
export class YoutubeService implements Service {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResult(
    order: ORDER = 'relevance',
    type: TYPE = 'video,channel,playlist',
    q?: string,
    // channelId?: string,
    time?: TIME
    )
    : Observable<SearchListResponse | ErrorResponse > {

    const part = ['snippet'].join(',');

    const publishedBefore = time ? new Date(
      new Date().getTime()
      - {
        ANY: undefined,
        TODAY: 24 * 60 * 60 * 1000,
        WEEK: 7 * 24 * 60 * 60 * 1000,
        MONTH: 30 * 24 * 60 * 60 * 1000
      }[time.toUpperCase()]
    ).toISOString() : null;

    const query = {
      q,
      type,
      part,
      order,
      publishedBefore
    };

    const params = { key };
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]));

    // console.log('params', params)
    return this.http.get<SearchListResponse | ErrorResponse >(
          API_SEARCH, {
            params,
            headers
          }).pipe();
  }

// https://developers.google.com/youtube/v3/docs/playlists/list#response
  getPlaylist(
    id?: string,
    channelId?: string)
    : Observable<PlaylistListResponse | ErrorResponse > {

    const part = ['snippet', 'contentDetails'].join(',');

    const query = {
      id,
      part,
      channelId
    };

    const params = { key };
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]));

    // console.log('params', params)
    return this.http.get<PlaylistListResponse | ErrorResponse >(
            API_PLAYLIST, {
            params,
            headers
          }).pipe();
  }


  // https://developers.google.com/youtube/v3/docs/playlistItems/list#request
  getPlaylistItems(
    playlistId?: string,
    id?: string)
    : Observable<PlaylistItemListResponse | ErrorResponse > {

    const part = ['snippet'].join(',');

    const query = {
      id,
      part,
      playlistId
    };

    const params = { key };
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]));

    // console.log('params', params)
    return this.http.get<PlaylistItemListResponse | ErrorResponse >(
            API_PLAYLIST_ITEM, {
            params,
            headers
          }).pipe();
  }

// https://developers.google.com/youtube/v3/docs/channelSections/list#http-request
  getChannelSection(
    channelId?: string,
    id?: string)
    : Observable<ChannelSectionListResponse | ErrorResponse > {

      console.log('getChannelSection', channelId, id)
    const part = ['snippet', 'contentDetails'].join(',');

    const query = {
      id,
      part,
      channelId
    };

    const params = { key };
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]));

    console.log('params', params, API_CHANNEL_SECTION)
    return this.http.get<ChannelSectionListResponse | ErrorResponse >(
          API_CHANNEL_SECTION, {
            params,
            headers
          }).pipe();
  }

// https://developers.google.com/youtube/v3/docs/videos/list#request
  getVideo(
    id?: string,
    chart?: "mostPopular",
    )
    : Observable<VideoListResponse | ErrorResponse > {

    const part = ['snippet', 'contentDetails', 'statistics'].join(',');

    const query = {
      id,
      part,
      chart
    };

    const params = { key };
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]));

    // console.log('params', params)
    return this.http.get<VideoListResponse | ErrorResponse >(
           API_VIDEOS, {
            params,
            headers
          }).pipe();
  }

  // https://developers.google.com/youtube/v3/docs/channels/list#http-request
  getChannelList(
    id?: string,
    categoryId?: string,
    forUsername?: string,
    managedByMe?: boolean,
    mine?: boolean,
    mySubscribers?: boolean
    )
    : Observable<ChannelListResponse | ErrorResponse > {

    const part = ['snippet', 'statistics', 'brandingSettings'].join(',');

    const query = {
      part,
      categoryId,
      forUsername,
      id,
      managedByMe,
      mine,
      mySubscribers
    };

    const params = { key };
    Object.keys(query)
    .filter(k => query[k])
    .forEach(k => (params[k] = query[k]));

    // console.log('params', params)
    return this.http.get<ChannelListResponse | ErrorResponse >(
          API_CHANNELS, {
            params,
            headers
          }).pipe();
  }
}
