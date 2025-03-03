import YoutubeLayout from "layout/youtube/YoutubeLayout";
import { yt_home_path, yt_trending_path } from "./connections";
import YoutubeFeed from "pages/youtube/YoutubeFeed";
import YoutubeTrending from "pages/youtube/YoutubeTrending";

const YoutubeRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <YoutubeLayout />,
      children: [
        {
          path: yt_home_path(),
          element: <YoutubeFeed />,
        },
        {
          path: yt_trending_path(),
          element: <YoutubeTrending />,
        },
      ],
    },
  ],
};
export default YoutubeRoutes;
