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
