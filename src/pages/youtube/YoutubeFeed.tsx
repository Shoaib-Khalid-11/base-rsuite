/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetYTHomeInfiniteScroll } from "global/apis/queries/youtube.query";
import {
  AppIcon,
  AppMUIChip,
  AppMUIGrid,
  AppMUIStack,
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

      {YTHomeInfiniteScrollResponse?.pages?.length &&
        YTHomeInfiniteScrollResponse.pages[0]?.filters && (
          <ScrollableContainer>
            {YTHomeInfiniteScrollResponse.pages?.map((page) =>
              page.filters?.map((filter: any) => (
                <AppMUIChip
                  key={filter.filter}
                  label={filter.filter}
                  onClick={() => handleFilterClick(filter.continuation)}
                  color={
                    selectedFilter === filter.continuation
                      ? "primary"
                      : "default"
                  }
                  clickable
                />
              ))
            )}
          </ScrollableContainer>
        )}

      <AppMUIGrid container spacing={3}>
        {YTHomeInfiniteScrollResponse?.pages?.flatMap((page) =>
          page.data.map((item: any) => (
            <>
              {item.type === "video" ? (
                <>
                  {item ? (
                    <YoutubeVideoCard key={item.videoId!} {...item} />
                  ) : (
                    []
                  )}
                </>
              ) : item.type === "shorts_listing" ? (
                <>
                  <AppMUIGrid size={12} key={item.videoId!}>
                    <AppMUIStack
                      direction={"row"}
                      alignItems={"center"}
                      padding={1}
                      spacing={1}
                    >
                      <AppMUITypography variant="h4" color="red">
                        <AppIcon icon="simple-icons:youtubeshorts" />
                      </AppMUITypography>
                      <AppMUITypography
                        variant="h6"
                        align="center"
                        fontWeight="bolder"
                      >
                        {item.title}
                      </AppMUITypography>
                    </AppMUIStack>
                    <ScrollableContainer>
                      {item?.data?.map((shorts: any) => {
                        return (
                          <YoutubeShortsCard
                            key={shorts.videoId!}
                            {...shorts}
                          />
                        );
                      })}
                    </ScrollableContainer>
                  </AppMUIGrid>
                </>
              ) : item.type === "video_listing" ? (
                <>
                  <AppMUIGrid container spacing={3}>
                    <AppMUIGrid size={12}>
                      <AppMUIStack
                        direction={"row"}
                        alignItems={"center"}
                        padding={1}
                        spacing={1}
                      >
                        <AppMUITypography variant="h4" color="red">
                          <AppIcon icon="streamline:trending-content-solid" />
                        </AppMUITypography>
                        <AppMUITypography
                          variant="h6"
                          align="center"
                          fontWeight="bolder"
                        >
                          {item.title}
                        </AppMUITypography>
                      </AppMUIStack>
                    </AppMUIGrid>
                    {item?.data?.map((Trending: any) => {
                      return (
                        <>
                          {Trending ? (
                            <YoutubeVideoCard
                              key={Trending.videoId!}
                              {...Trending}
                            />
                          ) : (
                            []
                          )}
                        </>
                      );
                    })}
                  </AppMUIGrid>
                </>
              ) : null}
            </>
          ))
        )}
      </AppMUIGrid>

      {YTHomeInfiniteScrollResponse?.pages.slice(-1)[0]?.nextPage !== "" && (
        <div ref={ref}></div>
      )}
      {YTHomeInfiniteScrollResponse?.pages.slice(-1)[0]?.message && (
        <AppMUITypography variant="h2" color="error" align="center" padding={2}>
          {YTHomeInfiniteScrollResponse?.pages.slice(-1)[0].message}
        </AppMUITypography>
      )}
    </>
  );
};

export default YoutubeFeed;
