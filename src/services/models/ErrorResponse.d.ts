// https://developers.google.com/youtube/v3/docs/core_errors#top_of_page

export interface ErrorResponse {
    "error": {
     "errors": Error[],
     "code": number,
     "message": string
    }
}

interface Error {
    "domain": string,
    "reason": string,
    "message": string,
    "locationType": string,
    "location": string
}