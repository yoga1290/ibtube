// https://developers.google.com/youtube/v3/docs/search/list#response

import { SearchResult } from './SearchResult'

export interface SearchListResponse {
    "kind": "youtube#searchListResponse",
    "etag": any,
    "nextPageToken": string,
    "prevPageToken": string,
    "regionCode": string,
    "pageInfo": {
      "totalResults": number,
      "resultsPerPage": number
    },
    "items": SearchResult[]
}
