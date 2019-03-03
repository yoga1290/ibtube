// https://developers.google.com/youtube/v3/docs/search#resource

type datetime = string
type THUMBNAIL_TYPE = "default" | "medium"| "high"

export interface SearchResult {
    "kind": "youtube#searchResult",
    "etag": any,
    "id": {
        "kind": string,
        "videoId"?: string,
        "channelId"?: string,
        "playlistId"?: string
    },
    "snippet": {
        "publishedAt": datetime,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
            ([THUMBNAIL_TYPE]): {
                "url": string,
                "width": number,
                "height": number
            }
        },
        "channelTitle": string,
        "liveBroadcastContent": string
    }
}