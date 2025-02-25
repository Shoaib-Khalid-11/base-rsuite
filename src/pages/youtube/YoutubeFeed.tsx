import { GetYTHomeInfiniteScroll } from "global/apis/queries/youtube.query";
import { AppMUIChip, AppMUIGrid } from "global/components/elements/base";
import ScrollableContainer from "global/components/custom/ScrollAbleContainer";
import YoutubeCard from "global/components/custom/YoutubeCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Loader from "global/components/custom/Loader";

const YoutubeFeed = () => {
  const { ref, inView } = useInView();
  const {
    YTHomeInfiniteScrollFetchNextPage,
    YTHomeInfiniteScrollResponse,
    YTHomeInfiniteScrollLoading,
    YTHomeInfiniteScrollIsFetchingNextPage,
  } = GetYTHomeInfiniteScroll();
  console.log(YTHomeInfiniteScrollLoading);
  useEffect(() => {
    if (inView) {
      YTHomeInfiniteScrollFetchNextPage();
    }
  }, [YTHomeInfiniteScrollFetchNextPage, inView]);
  return (
    <>
      {YTHomeInfiniteScrollLoading ||
        (YTHomeInfiniteScrollIsFetchingNextPage && <Loader />)}
      <>
        {YTHomeInfiniteScrollResponse?.pages[0].filters && (
          <ScrollableContainer>
            {YTHomeInfiniteScrollResponse?.pages?.map((page) =>
              page.filters?.map((filter) => (
                <AppMUIChip
                  key={filter.filter} // Ensure `filter.filter` is unique, or use another unique property
                  label={filter.filter}
                  clickable
                />
              ))
            )}
          </ScrollableContainer>
        )}

        <AppMUIGrid container spacing={3}>
          {YTHomeInfiniteScrollResponse?.pages?.flatMap((page) =>
            page.data
              ?.filter((item) => item.type === "video")
              .map((item) => (
                <AppMUIGrid
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  key={item.videoId!}
                >
                  <YoutubeCard
                    key={item.videoId!}
                    title={item.title!}
                    channelTitle={item.channelTitle!}
                    channelThumbnail={item.channelThumbnail! ?? []}
                    thumbnail={item.thumbnail!}
                    viewCount={item.viewCount!}
                    publishedTimeText={item.publishedTimeText!}
                  />
                </AppMUIGrid>
              ))
          )}
        </AppMUIGrid>
      </>

      <div ref={ref}></div>
    </>
  );
};

export default YoutubeFeed;
