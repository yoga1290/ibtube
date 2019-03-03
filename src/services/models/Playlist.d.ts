// https://developers.google.com/youtube/v3/docs/playlists#resource

type datetime = string
type integer = number
type etag = string

export interface Playlist {
    "kind": "youtube#playlist",
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
        "tags": string[],
        "defaultLanguage": string,
        "localized": {
        "title": string,
        "description": string
        }
    },
    "status": {
        "privacyStatus": string
    },
    "contentDetails": {
        "itemCount": integer
    },
    "player": {
        "embedHtml": string
    },
    "localizations": {
        (key): {
        "title": string,
        "description": string
        }
    }
}