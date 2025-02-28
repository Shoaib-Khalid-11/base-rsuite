import { YoutubeVideoCardModel } from "global/types";
import {
  AppMUIAvatar,
  AppMUIBox,
  AppMUICard,
  AppMUICardActionArea,
  AppMUICardContent,
  AppMUICardMedia,
  AppMUIDivider,
  AppMUIGrid,
  AppMUIStack,
  AppMUITypography,
} from "../elements/base";
import { useState } from "react";

const YoutubeVideoCard: React.FC<YoutubeVideoCardModel> = ({
  title,
  channelTitle,
  channelThumbnail,
  viewCount,
  publishedTimeText,
  thumbnail,
  videoId,
}) => {
  const [isImageError, setIsImageError] = useState(false);
  const handleImageError = () => {
    setIsImageError(true);
  };
  if (isImageError || !thumbnail) {
    return null;
  }
  return (
    <>
      <AppMUIGrid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={videoId!}>
        <AppMUICard sx={{ height: "100%" }}>
          <AppMUICardActionArea>
            <AppMUICardMedia
              component="img"
              image={thumbnail[0].url || thumbnail[1].url}
              onError={handleImageError}
            />
            <AppMUICardContent>
              <AppMUIStack spacing={2} direction="row">
                <AppMUIBox>
                  <AppMUIAvatar
                    src={channelThumbnail[0]?.url ?? ""}
                    sx={{
                      width: 32,
                      height: 32,
                    }}
                    alt={channelTitle}
                  />
                </AppMUIBox>
                <AppMUIBox>
                  <AppMUITypography variant="body2" fontWeight={"bold"}>
                    {title}
                  </AppMUITypography>
                  <AppMUIDivider sx={{ my: 0.6 }} />
                  <AppMUITypography variant="body2">
                    {channelTitle}
                  </AppMUITypography>
                  {viewCount && publishedTimeText && (
                    <AppMUITypography variant="caption">
                      {viewCount} views . {publishedTimeText}
                    </AppMUITypography>
                  )}
                </AppMUIBox>
              </AppMUIStack>
            </AppMUICardContent>
          </AppMUICardActionArea>
        </AppMUICard>
      </AppMUIGrid>
    </>
  );
};

export default YoutubeVideoCard;
