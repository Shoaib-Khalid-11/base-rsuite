import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
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
  const [selectedFilter, setSelectedFilter] = useState<string>("");

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
    queryKey: ["yt-home-infinite-scroll", selectedFilter],
    queryFn: async ({ pageParam = "" }) => {
      const response = await youtubeServices.getHome(pageParam, selectedFilter);
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
    setSelectedFilter(filter);
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
    selectedFilter,
  };
};
