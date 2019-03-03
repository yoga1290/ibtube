// https://developers.google.com/youtube/v3/docs/channels#resource

type datetime = string
type integer = number
type long = number
type etag = string

export interface Channel {
    "kind": "youtube#channel",
    "etag": etag,
    "id": string,
    "snippet": {
      "title": string,
      "description": string,
      "customUrl": string,
      "publishedAt": datetime,
      "thumbnails": {
        (key): {
          "url": string,
          "width": integer,
          "height": integer
        }
      },
      "defaultLanguage": string,
      "localized": {
        "title": string,
        "description": string
      },
      "country": string
    },
    "contentDetails": {
      "relatedPlaylists": {
        "likes": string,
        "favorites": string,
        "uploads": string,
        "watchHistory": string,
        "watchLater": string
      }
    },
    "statistics": {
      "viewCount": long,
      "commentCount": long,
      "subscriberCount": long,
      "hiddenSubscriberCount": boolean,
      "videoCount": long
    },
    "topicDetails": {
      "topicIds": [
        string
      ],
      "topicCategories": [
        string
      ]
    },
    "status": {
      "privacyStatus": string,
      "isLinked": boolean,
      "longUploadsStatus": string
    },
    "brandingSettings": {
      "channel": {
        "title": string,
        "description": string,
        "keywords": string,
        "defaultTab": string,
        "trackingAnalyticsAccountId": string,
        "moderateComments": boolean,
        "showRelatedChannels": boolean,
        "showBrowseView": boolean,
        "featuredChannelsTitle": string,
        "featuredChannelsUrls": [
          string
        ],
        "unsubscribedTrailer": string,
        "profileColor": string,
        "defaultLanguage": string,
        "country": string
      },
      "watch": {
        "textColor": string,
        "backgroundColor": string,
        "featuredPlaylistId": string
      },
      "image": {
        "bannerImageUrl": string,
        "bannerMobileImageUrl": string,
        "watchIconImageUrl": string,
        "trackingImageUrl": string,
        "bannerTabletLowImageUrl": string,
        "bannerTabletImageUrl": string,
        "bannerTabletHdImageUrl": string,
        "bannerTabletExtraHdImageUrl": string,
        "bannerMobileLowImageUrl": string,
        "bannerMobileMediumHdImageUrl": string,
        "bannerMobileHdImageUrl": string,
        "bannerMobileExtraHdImageUrl": string,
        "bannerTvImageUrl": string,
        "bannerTvLowImageUrl": string,
        "bannerTvMediumImageUrl": string,
        "bannerTvHighImageUrl": string,
        "bannerExternalUrl": string
      },
      "hints": [
        {
          "property": string,
          "value": string
        }
      ]
    },
    "invideoPromotion": {
      "defaultTiming": {
        "type": string,
        "offsetMs": long,
        "durationMs": long
      },
      "position": {
        "type": string,
        "cornerPosition": string
      },
      "items": [
        {
          "id": {
            "type": string,
            "videoId": string,
            "websiteUrl": string,
            "recentlyUploadedBy": string
          },
          "timing": {
            "type": string,
            "offsetMs": long,
            "durationMs": long
          },
          "customMessage": string,
          "promotedByContentOwner": boolean
        }
      ],
      "useSmartTiming": boolean
    },
    "auditDetails": {
      "overallGoodStanding": boolean,
      "communityGuidelinesGoodStanding": boolean,
      "copyrightStrikesGoodStanding": boolean,
      "contentIdClaimsGoodStanding": boolean
    },
    "contentOwnerDetails": {
      "contentOwner": string,
      "timeLinked": datetime
    },
    "localizations": {
      (key): {
        "title": string,
        "description": string
      }
    }
}