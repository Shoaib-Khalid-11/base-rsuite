import { GetYTHome } from "global/apis/queries/youtube.query";
import {
  AppMUIBox,
  AppMUIContainer,
  AppMUIMasonry,
} from "global/components/base";
import YoutubeCard from "global/components/elements/YoutubeCard";
import NavBar from "global/shared/NavBar";

const SimpleLayout = () => {
  const { YTHomeResponse } = GetYTHome();
  console.log(YTHomeResponse);
  return (
    <>
      <NavBar />
      <AppMUIBox mt={4}>
        <AppMUIContainer maxWidth="xl">
          <h1>Simple Layout</h1>
          <AppMUIMasonry
            columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
            spacing={{ xs: 1, sm: 2 }}
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
        </AppMUIContainer>
      </AppMUIBox>
    </>
  );
};

export default SimpleLayout;
