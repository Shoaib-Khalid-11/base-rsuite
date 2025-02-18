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
export interface YoutubeCardModel {
  type?: string;
  videoId?: string;
  title?: string;
  channelTitle?: string;
  channelId?: string;
  channelHandle?: string;
  channelThumbnail?: Thumbnail[];
  description?: string;
  viewCount?: string;
  publishedTimeText?: string;
  publishDate?: string;
  publishedAt?: string;
  lengthText?: string;
  thumbnail?: Thumbnail[];
  richThumbnail?: Thumbnail[];
}
