import { alpha, styled, Theme } from "@mui/material";
import { BrowserView, MobileView } from "react-device-detect";
import SimpleBar, { Props } from "simplebar-react";
import { MUIStyledCommonProps } from "@mui/system";
import { ReactNode } from "react";
import { AppMUIBox } from "components/base";

const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
});
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": { backgroundColor: alpha(theme.palette.secondary.main, 0.25) },
    "&.simplebar-visible:before": { opacity: 1 },
  },
  "& .simplebar-track.simplebar-vertical": { width: 10 },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": { height: 6 },
  "& .simplebar-mask": { zIndex: "inherit" },
}));
const SimpleBarScroll = ({
  children,
  sx,
  ...other
}: MUIStyledCommonProps<Theme> & Props) => {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle clickOnTrack={false} sx={sx} {...other}>
          {children as ReactNode}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <AppMUIBox sx={{ overflowX: "auto", ...sx }} {...other}>
          {children as ReactNode}
        </AppMUIBox>
      </MobileView>
    </>
  );
};

export default SimpleBarScroll;
