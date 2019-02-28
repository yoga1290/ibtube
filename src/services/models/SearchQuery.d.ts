// https://developers.google.com/youtube/v3/docs/search/list


type TIME = "TODAY" | "WEEK" | "MONTH" | "ANY";
type ORDER = "date" | "rating" | "relevance" | "title" | "videoCount" | "viewCount";
type TYPE = "video,channel,playlist" | "channel" | "playlist"

export interface SearchQuery {
    q?:     string
    type?:  TYPE
    time?:  TIME
    order?: ORDER
}
