import { YoutubeShortsCardModel } from "global/types";
import {
  AppMUIBox,
  AppMUICard,
  AppMUICardActionArea,
  AppMUICardContent,
  AppMUICardMedia,
  AppMUIDivider,
  AppMUITypography,
} from "../elements/base";

export const YoutubeShortsCard: React.FC<YoutubeShortsCardModel> = ({
  title,
  thumbnail,
  viewCountText,
}) => {
  return (
    <>
      <AppMUIBox>
        <AppMUICard sx={{ height: "100%", width: 260 }}>
          <AppMUICardActionArea>
            <AppMUICardMedia
              component="img"
              image={thumbnail[0].url}
              sx={{ height: "100%" }}
            />
            <AppMUICardContent>
              <AppMUITypography variant="body2" fontWeight={"bold"}>
                {title}
              </AppMUITypography>
              <AppMUIDivider sx={{ my: 0.6 }} />
              <AppMUITypography variant="body2">
                {viewCountText}
              </AppMUITypography>
            </AppMUICardContent>
          </AppMUICardActionArea>
        </AppMUICard>
      </AppMUIBox>
    </>
  );
};

export default YoutubeShortsCard;
