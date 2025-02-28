import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { YoutubeService } from "../services";
import { useYoutubeStoreHook } from "global/hooks";
const youtubeServices = new YoutubeService();
export const GetYTTrending = () => {
  const { data, error, isError, isLoading } = useQuery<unknown[]>({
    queryKey: ["yt-trending"],
    queryFn: () => youtubeServices.getTrending("US"),
  });

  if (isError) {
    enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
  }
  return {
    YTTrendingResponse: data,
    YTTrendingError: error,
    YTTrendingLoading: isLoading,
  };
};
export const GetYTHomeInfiniteScroll = () => {
  const {
    youtubeStateValue: { initialLink },
    setYoutubeLinkReducer,
  } = useYoutubeStoreHook();
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["yt-home-infinite-scroll", initialLink],
    queryFn: async ({ pageParam = "" }) => {
      const response = await youtubeServices.getHome(
        pageParam,
        initialLink,
        "PK"
      );
      return {
        data: response.data,
        nextPage: response.continuation,
        filters: response.filters,
        message: response.msg,
      };
    },
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextPage ?? "",
  });
  if (isError) {
    enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
  }
  const handleFilterClick = (filter: string) => {
    setYoutubeLinkReducer(filter);
    refetch(); // Refetch data when filter changes
  };
  return {
    YTHomeInfiniteScrollResponse: data,
    YTHomeInfiniteScrollError: error,
    YTHomeInfiniteScrollLoading: isLoading,
    YTHomeInfiniteScrollFetchNextPage: fetchNextPage,
    YTHomeInfiniteScrollHasNextPage: hasNextPage,
    YTHomeInfiniteScrollIsFetchingNextPage: isFetchingNextPage,
    handleFilterClick,
    initialLink,
  };
};
