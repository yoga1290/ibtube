// https://developers.google.com/youtube/v3/docs/channelSections#resource-representation

type integer = number
type etag = string

export interface ChannelSection {
    "kind": "youtube#channelSection",
    "etag": etag,
    "id": string,
    "snippet": {
      "type": string,
      "style": string,
      "channelId": string,
      "title": string,
      "position": integer,
      "defaultLanguage": string,
      "localized": {
        "title": string
      }
    },
    "contentDetails": {
      "playlists": string[],
      "channels": string[]
    },
    "localizations": {
      (key): {
        "title": string
      }
    },
    "targeting": {
      "languages": [
        string
      ],
      "regions": [
        string
      ],
      "countries": [
        string
      ]
    }
}