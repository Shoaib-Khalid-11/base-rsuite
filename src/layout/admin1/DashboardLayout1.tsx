import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox, AppMUIToolBar } from "global/components/elements/base";
import { DRAWER_WIDTH } from "global/configs/config";
import { useAppStore } from "global/hooks";
import Header1 from "global/shared/SideBar1/Header";
import { MenuOrientation } from "global/types";
import Drawer from "global/shared/SideBar1/Drawer1";

// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useToggleDrawerOpen } from "global/hooks/menu";

const DashboardLayout1 = () => {
  const theme = useTheme();
  const downXL = useMediaQuery(theme.breakpoints.down("xl"));
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
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
      <Header1 />
      <Drawer />
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

export default DashboardLayout1;
