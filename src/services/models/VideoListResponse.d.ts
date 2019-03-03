// https://developers.google.com/youtube/v3/docs/videos/list#response

import { Video } from './Video'

type etag = string
type integer = number

export interface VideoListResponse {
    "kind": "youtube#videoListResponse",
    "etag": etag,
    "nextPageToken": string,
    "prevPageToken": string,
    "pageInfo": {
      "totalResults": integer,
      "resultsPerPage": integer
    },
    "items": Video[]
}