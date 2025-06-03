import { ISO_3166_2 } from "utils/ISO-3166-2";

export type GeoProps = (typeof ISO_3166_2)[number]["ISO2"];
export enum Trending {
  Now = "now",
  Music = "music",
  Games = "games",
  Movies = "movies",
}
// export type ChannelThumbnail = {
//   url: string;
//   width: number;
//   height: number;
// };
export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
// export type RitchThumbnail = {
//   url: string;
//   width: number;
//   height: number;
// };
export interface YoutubeVideoCardModel {
  type: string;
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  channelHandle: string;
  channelThumbnail?: Thumbnail[];
  description: string;
  viewCount: string;
  publishedTimeText: string;
  publishDate: string;
  publishedAt: string;
  lengthText: string;
  thumbnail?: Thumbnail[];
  richThumbnail?: Thumbnail[];
}
export interface YoutubeShortsCardModel {
  isOriginalAspectRatio: boolean;
  params: string;
  playerParams: string;
  sequenceParams: string;
  thumbnail: Thumbnail[];
  title: string;
  type: string;
  videoId: string;
  viewCountText: string;
}
