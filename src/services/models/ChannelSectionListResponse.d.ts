// https://developers.google.com/youtube/v3/docs/channelSections/list#response

import { ChannelSection } from './ChannelSection'

type etag = string

export interface ChannelSectionListResponse {
    "kind": "youtube#channelSectionListResponse",
    "etag": etag,
    "items": ChannelSection[]
}