// https://developers.google.com/youtube/v3/docs/playlists/list#response

import { Playlist } from './Playlist'

type datetime = string
type integer = number
type etag = string

export interface PlaylistListResponse {
    "kind": "youtube#playlistListResponse",
    "etag": etag,
    "nextPageToken": string,
    "prevPageToken": string,
    "pageInfo": {
      "totalResults": integer,
      "resultsPerPage": integer
    },
    "items": Playlist[]
}
