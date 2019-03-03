// https://developers.google.com/youtube/v3/docs/channels/list#response

import { Channel } from './Channel'

type etag = string
type integer = number

export interface ChannelListResponse {
  "kind": "youtube#channelListResponse",
  "etag": etag,
  "nextPageToken": string,
  "prevPageToken": string,
  "pageInfo": {
    "totalResults": integer,
    "resultsPerPage": integer
  },
  "items": Channel[]
}
