// https://developers.google.com/youtube/v3/docs/playlistItems#resource-representation

type datetime = string
type integer = number
type etag = string

export interface PlaylistItem {
    "kind": "youtube#playlistItem",
    "etag": etag,
    "id": string,
    "snippet": {
      "publishedAt": datetime,
      "channelId": string,
      "title": string,
      "description": string,
      "thumbnails": {
        (key): {
          "url": string,
          "width": integer,
          "height": integer
        }
      },
      "channelTitle": string,
      "playlistId": string,
      "position": integer,
      "resourceId": {
        "kind": string,
        "videoId": string,
      }
    },
    "contentDetails": {
      "videoId": string,
      "startAt": string,
      "endAt": string,
      "note": string,
      "videoPublishedAt": datetime
    },
    "status": {
      "privacyStatus": string
    }
}