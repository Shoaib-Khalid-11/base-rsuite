import { GetYTHomeInfiniteScroll } from "global/apis/queries/youtube.query";
import {
  AppMUIChip,
  AppMUIGrid,
  AppMUITypography,
} from "global/components/elements/base";
import ScrollableContainer from "global/components/custom/ScrollAbleContainer";
import YoutubeVideoCard from "global/components/custom/YoutubeVideoCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Loader from "global/components/custom/Loader";
import YoutubeShortsCard from "global/components/custom/YoutubeShortsCard";

const YoutubeFeed = () => {
  const { ref, inView } = useInView();
  const {
    YTHomeInfiniteScrollFetchNextPage,
    YTHomeInfiniteScrollResponse,
    YTHomeInfiniteScrollLoading,
    YTHomeInfiniteScrollIsFetchingNextPage,
    // YTHomeInfiniteScrollHasNextPage,
    handleFilterClick,
    selectedFilter,
  } = GetYTHomeInfiniteScroll();
  console.log(YTHomeInfiniteScrollResponse);
  useEffect(() => {
    if (inView) {
      YTHomeInfiniteScrollFetchNextPage();
    }
  }, [YTHomeInfiniteScrollFetchNextPage, inView]);
  return (
    <>
      {YTHomeInfiniteScrollLoading ||
        (YTHomeInfiniteScrollIsFetchingNextPage && <Loader />)}

      {YTHomeInfiniteScrollResponse?.pages[0].filters && (
        <ScrollableContainer>
          {YTHomeInfiniteScrollResponse?.pages?.map((page) =>
            page.filters?.map((filter) => (
              <AppMUIChip
                key={filter.filter} // Ensure `filter.filter` is unique, or use another unique property
                label={filter.filter}
                onClick={() => handleFilterClick(filter.continuation)}
                color={
                  selectedFilter === filter.continuation ? "primary" : "default"
                }
                clickable
              />
            ))
          )}
        </ScrollableContainer>
      )}

      <AppMUIGrid container spacing={3}>
        {YTHomeInfiniteScrollResponse?.pages?.flatMap((page) =>
          page.data.map((item) => (
            <>
              {item.type === "video" ? (
                <AppMUIGrid
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  key={item.videoId!}
                >
                  <YoutubeVideoCard
                    key={item.videoId!}
                    // title={item.title!}
                    // channelTitle={item.channelTitle!}
                    // channelThumbnail={item.channelThumbnail! ?? []}
                    // thumbnail={item.thumbnail!}
                    // viewCount={item.viewCount!}
                    // publishedTimeText={item.publishedTimeText!}
                    {...item}
                  />
                </AppMUIGrid>
              ) : (
                item.type === "shorts_listing" && (
                  <>
                    <ScrollableContainer>
                      {item?.data?.map((shorts) => {
                        return (
                          <YoutubeShortsCard
                            key={shorts.videoId!}
                            {...shorts}
                          />
                        );
                      })}
                    </ScrollableContainer>
                  </>
                )
              )}
            </>
          ))
        )}
      </AppMUIGrid>

      {YTHomeInfiniteScrollResponse?.pages.slice(-1)[0]?.message !==
        "No more results" &&
        YTHomeInfiniteScrollResponse?.pages.slice(-1)[0]?.nextPage !== "" && (
          <div ref={ref}></div>
        )}
      {YTHomeInfiniteScrollResponse?.pages &&
        YTHomeInfiniteScrollResponse?.pages.slice(-1)[0]?.message && (
          <AppMUITypography
            variant="h2"
            color="error"
            align="center"
            padding={2}
          >
            {YTHomeInfiniteScrollResponse?.pages.slice(-1)[0].message}
          </AppMUITypography>
        )}
      {/* <div ref={ref}></div> */}
    </>
  );
};

export default YoutubeFeed;
