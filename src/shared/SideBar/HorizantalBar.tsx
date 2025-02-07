import { alpha, useScrollTrigger, useTheme } from "@mui/material";
import { AppMUIAppBar, AppMUIBox, AppMUIContainer } from "components/base";
import { HEADER_HEIGHT } from "configs/config";
import { useAppStore } from "hooks";
import { cloneElement, ReactElement } from "react";
import Navigation from "./Content/Navigation";

interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}
const ElevationScroll: React.FC<ElevationScrollProps> = ({
  children,
  window,
}) => {
  //   const theme = useTheme();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 1,
  });
};
const HorizantalBar = () => {
  const theme = useTheme();
  const {
    appStateValue: { container },
  } = useAppStore();
  return (
    <>
      <ElevationScroll>
        <AppMUIAppBar
          sx={{
            top: HEADER_HEIGHT,
            height: HEADER_HEIGHT,
            bgcolor: alpha(theme.palette.background.default, 0.8),
            backdropFilter: "blur(8px)",
            width: "100%",
            justifyContent: "center",
            borderTop: `1px solid ${theme.palette.divider}`,
            zIndex: 1098,
            color: theme.palette.secondary.main,
          }}
        >
          <AppMUIContainer maxWidth={container ? "xl" : false}>
            <AppMUIBox sx={{ display: "flex", alignItems: "center" }}>
              <Navigation />
            </AppMUIBox>
          </AppMUIContainer>
        </AppMUIAppBar>
      </ElevationScroll>
    </>
  );
};

export default HorizantalBar;
