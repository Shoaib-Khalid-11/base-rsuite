import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox, AppMUIToolBar } from "global/components/elements/base";
import { useAppStore } from "global/hooks";
// import NavBar from "shared/NavBar";
import Header from "global/shared/SideBar/Header";
import { MenuOrientation } from "global/types/config.model";
import Drawer from "global/shared/SideBar/Drawer";
import HorizontalBar from "global/shared/SideBar/Drawer/HorizantalBar";
import { useEffect } from "react";
import { useToggleDrawerOpen } from "global/hooks/menu";
import { DRAWER_WIDTH } from "global/configs/config";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const theme = useTheme();
  const downXL = useMediaQuery(theme.breakpoints.down("xl"));
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const handlerDrawerOpen = useToggleDrawerOpen();
  const {
    appStateValue: { menuOrientation, miniDrawer },
  } = useAppStore();
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen.mutate(!downXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);
  return (
    <>
      <AppMUIBox sx={{ display: "flex", width: "100%" }}>
        <Header />
        {!isHorizontal ? <Drawer /> : <HorizontalBar />}
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
    </>
  );
};

export default DashboardLayout;
