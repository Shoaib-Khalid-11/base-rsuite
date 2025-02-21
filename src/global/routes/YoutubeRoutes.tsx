import YoutubeLayout from "layout/youtube/YoutubeLayout";
import { yt_home_path } from "./connections";
import YoutubeFeed from "pages/youtube/YoutubeFeed";

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
      ],
    },
  ],
};
export default YoutubeRoutes;
