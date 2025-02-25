import { useQuery } from "@tanstack/react-query";
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
