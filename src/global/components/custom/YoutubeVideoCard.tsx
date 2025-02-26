import { YoutubeVideoCardModel } from "global/types/youtubeCard.model";
import {
  AppMUIAvatar,
  AppMUIBox,
  AppMUICard,
  AppMUICardActionArea,
  AppMUICardContent,
  AppMUICardMedia,
  AppMUIDivider,
  AppMUIStack,
  AppMUITypography,
} from "../elements/base";

const YoutubeVideoCard: React.FC<YoutubeVideoCardModel> = ({
  title,
  channelTitle,
  channelThumbnail,
  viewCount,
  publishedTimeText,
  thumbnail,
}) => {
  return (
    <>
      <AppMUICard sx={{ height: "100%" }}>
        <AppMUICardActionArea>
          <AppMUICardMedia component="img" image={thumbnail[0].url} />
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
    </>
  );
};

export default YoutubeVideoCard;
