// https://developers.google.com/youtube/v3/docs/playlistItems/list#response

import { PlaylistItem } from './PlaylistItem'

type integer = number
type etag = string

export interface PlaylistItemListResponse {
    "kind": "youtube#playlistItemListResponse",
    "etag": etag,
    "nextPageToken": string,
    "prevPageToken": string,
    "pageInfo": {
      "totalResults": integer,
      "resultsPerPage": integer
    },
    "items": PlaylistItem[]
}