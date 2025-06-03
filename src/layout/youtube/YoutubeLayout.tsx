import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox, AppMUIToolBar } from "components/elements/base";
import { DRAWER_WIDTH } from "configs/config";
import { useAppStore } from "hooks";

// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useToggleDrawerOpen } from "hooks/menu";
import { MenuOrientation } from "types";
import { MiniSideBarDrawer, Navigation } from "components/custom";
import { YoutubeHeaderContent } from "contents";
import MiniHeader from "components/custom/MiniHeader";
import HorizantalBar from "components/custom/HorizantalBar";
import { useMenuItems } from "content/menuitems";

const YoutubeLayout = () => {
  const theme = useTheme();
  const downXL = useMediaQuery(theme.breakpoints.down("xl"));
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const { youtube } = useMenuItems();
  const {
    appStateValue: { menuOrientation, miniDrawer },
  } = useAppStore();

  const handlerDrawerOpen = useToggleDrawerOpen();
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen.mutate(!downXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);
  return (
    <AppMUIBox sx={{ display: "flex", width: "100%" }}>
      {/* <Header
        headerContent={<YoutubeHeaderContent />}
        ToolBarProps={{
          sx: { justifyContent: "space-between" },
        }}
      /> */}
      <MiniHeader
        ToolBarProps={{ sx: { justifyContent: "space-between" } }}
        headerContent={<YoutubeHeaderContent />}
      />
      {/* <SideBarDrawer DrawerContent={<YoutubeSideBarContent />} /> */}
      {!isHorizontal ? (
        <MiniSideBarDrawer
          DrawerContent={<Navigation navigators={youtube} />}
        />
      ) : (
        <HorizantalBar children={<Navigation navigators={youtube} />} />
      )}
      <AppMUIBox
        component="main"
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          flexGrow: 1,
          p: { xs: 2, md: 3 },
        }}
      >
        <AppMUIToolBar
          sx={{
            mt: isHorizontal ? 8 : "inherit",
            mb: isHorizontal ? 2 : "inherit",
          }}
        />
        <Outlet />
      </AppMUIBox>
    </AppMUIBox>
  );
};

export default YoutubeLayout;
