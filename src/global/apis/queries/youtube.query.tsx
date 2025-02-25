import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { YoutubeService } from "../services";
const youtubeServices = new YoutubeService();
export const GetYTHome = () => {
  const { data, error, isError, isSuccess, isLoading } = useQuery<unknown[]>({
    queryKey: ["yt-home"],
    queryFn: () => youtubeServices.getHome(),
  });
  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar("Home page fetched successfully", { variant: "success" });
    }
    if (isError) {
      enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
    }
  }, [isSuccess, isError, error]);
  return {
    YTHomeResponse: data,
    YTHomeError: error,
    YTHomeLoading: isLoading,
  };
};
export const GetYTHomeInfiniteScroll = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["yt-home-infinite-scroll"],
    queryFn: async ({ pageParam = "" }) => {
      const response = await youtubeServices.getHome(pageParam);
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
  return {
    YTHomeInfiniteScrollResponse: data,
    YTHomeInfiniteScrollError: error,
    YTHomeInfiniteScrollLoading: isLoading,
    YTHomeInfiniteScrollFetchNextPage: fetchNextPage,
    YTHomeInfiniteScrollHasNextPage: hasNextPage,
    YTHomeInfiniteScrollIsFetchingNextPage: isFetchingNextPage,
  };
};
