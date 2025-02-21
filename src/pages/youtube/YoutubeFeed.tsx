import { GetYTHome } from "global/apis/queries/youtube.query";
import { AppMUIChip, AppMUIMasonry } from "global/components/base";
import ScrollableContainer from "global/components/custom/ScrollAbleContainer";
import YoutubeCard from "global/components/elements/YoutubeCard";

const YoutubeFeed = () => {
  const { YTHomeResponse } = GetYTHome();
  console.log(YTHomeResponse);
  return (
    <>
      {YTHomeResponse?.filters && (
        <ScrollableContainer>
          {YTHomeResponse?.filters?.map((filter) => {
            return (
              <AppMUIChip key={filter.filter} label={filter.filter} clickable />
            );
          })}
        </ScrollableContainer>
      )}
      <AppMUIMasonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={3}
        sx={{ mt: 2 }}
      >
        {YTHomeResponse?.data?.map((item) => {
          if (item.type === "video") {
            return (
              <YoutubeCard
                key={item.videoId!}
                title={item.title!}
                channelTitle={item.channelTitle!}
                channelThumbnail={item.channelThumbnail! ?? []}
                thumbnail={item.thumbnail!}
                viewCount={item.viewCount!}
                publishedTimeText={item.publishedTimeText!}
              />
            );
          }
        })}
      </AppMUIMasonry>
    </>
  );
};

export default YoutubeFeed;
