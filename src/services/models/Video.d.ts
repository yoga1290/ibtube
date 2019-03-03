// https://developers.google.com/youtube/v3/docs/videos#resource

type datetime = string
type integer = number
type long = number
type double = number
type etag = string

export interface Video {
    "kind": "youtube#video",
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
      "tags": [
        string
      ],
      "categoryId": string,
      "liveBroadcastContent": string,
      "defaultLanguage": string,
      "localized": {
        "title": string,
        "description": string
      },
      "defaultAudioLanguage": string
    },
    "contentDetails": {
      "duration": string,
      "dimension": string,
      "definition": string,
      "caption": string,
      "licensedContent": boolean,
      "regionRestriction": {
        "allowed": [
          string
        ],
        "blocked": [
          string
        ]
      },
      "contentRating": {
        "acbRating": string,
        "agcomRating": string,
        "anatelRating": string,
        "bbfcRating": string,
        "bfvcRating": string,
        "bmukkRating": string,
        "catvRating": string,
        "catvfrRating": string,
        "cbfcRating": string,
        "cccRating": string,
        "cceRating": string,
        "chfilmRating": string,
        "chvrsRating": string,
        "cicfRating": string,
        "cnaRating": string,
        "cncRating": string,
        "csaRating": string,
        "cscfRating": string,
        "czfilmRating": string,
        "djctqRating": string,
        "djctqRatingReasons": string[],
        "ecbmctRating": string,
        "eefilmRating": string,
        "egfilmRating": string,
        "eirinRating": string,
        "fcbmRating": string,
        "fcoRating": string,
        "fmocRating": string,
        "fpbRating": string,
        "fpbRatingReasons": string[],
        "fskRating": string,
        "grfilmRating": string,
        "icaaRating": string,
        "ifcoRating": string,
        "ilfilmRating": string,
        "incaaRating": string,
        "kfcbRating": string,
        "kijkwijzerRating": string,
        "kmrbRating": string,
        "lsfRating": string,
        "mccaaRating": string,
        "mccypRating": string,
        "mcstRating": string,
        "mdaRating": string,
        "medietilsynetRating": string,
        "mekuRating": string,
        "mibacRating": string,
        "mocRating": string,
        "moctwRating": string,
        "mpaaRating": string,
        "mpaatRating": string,
        "mtrcbRating": string,
        "nbcRating": string,
        "nbcplRating": string,
        "nfrcRating": string,
        "nfvcbRating": string,
        "nkclvRating": string,
        "oflcRating": string,
        "pefilmRating": string,
        "rcnofRating": string,
        "resorteviolenciaRating": string,
        "rtcRating": string,
        "rteRating": string,
        "russiaRating": string,
        "skfilmRating": string,
        "smaisRating": string,
        "smsaRating": string,
        "tvpgRating": string,
        "ytRating": string
      },
      "projection": string,
      "hasCustomThumbnail": boolean
    },
    "status": {
      "uploadStatus": string,
      "failureReason": string,
      "rejectionReason": string,
      "privacyStatus": string,
      "publishAt": datetime,
      "license": string,
      "embeddable": boolean,
      "publicStatsViewable": boolean
    },
    "statistics": {
      "viewCount": long,
      "likeCount": long,
      "dislikeCount": long,
      "favoriteCount": long,
      "commentCount": long
    },
    "player": {
      "embedHtml": string,
      "embedHeight": long,
      "embedWidth": long
    },
    "topicDetails": {
      "topicIds": [
        string
      ],
      "relevantTopicIds": [
        string
      ],
      "topicCategories": [
        string
      ]
    },
    "recordingDetails": {
      "recordingDate": datetime
    },
    "fileDetails": {
      "fileName": string,
      "fileSize": long,
      "fileType": string,
      "container": string,
      "videoStreams": [
        {
          "widthPixels": integer,
          "heightPixels": integer,
          "frameRateFps": double,
          "aspectRatio": double,
          "codec": string,
          "bitrateBps": long,
          "rotation": string,
          "vendor": string
        }
      ],
      "audioStreams": [
        {
          "channelCount": integer,
          "codec": string,
          "bitrateBps": long,
          "vendor": string
        }
      ],
      "durationMs": long,
      "bitrateBps": long,
      "creationTime": string
    },
    "processingDetails": {
      "processingStatus": string,
      "processingProgress": {
        "partsTotal": long,
        "partsProcessed": long,
        "timeLeftMs": long
      },
      "processingFailureReason": string,
      "fileDetailsAvailability": string,
      "processingIssuesAvailability": string,
      "tagSuggestionsAvailability": string,
      "editorSuggestionsAvailability": string,
      "thumbnailsAvailability": string
    },
    "suggestions": {
      "processingErrors": [
        string
      ],
      "processingWarnings": [
        string
      ],
      "processingHints": [
        string
      ],
      "tagSuggestions": [
        {
          "tag": string,
          "categoryRestricts": [
            string
          ]
        }
      ],
      "editorSuggestions": [
        string
      ]
    },
    "liveStreamingDetails": {
      "actualStartTime": datetime,
      "actualEndTime": datetime,
      "scheduledStartTime": datetime,
      "scheduledEndTime": datetime,
      "concurrentViewers": long,
      "activeLiveChatId": string
    },
    "localizations": {
      (key): {
        "title": string,
        "description": string
      }
    }
}