import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox, AppMUIToolBar } from "components/elements/base";
import { useAppStore } from "hooks";
// import NavBar from "shared/NavBar";
// import Header from "global/shared/SideBar/Header";
import { MenuOrientation } from "types";
// import Drawer from "global/shared/SideBar/Drawer";
// import HorizontalBar from "global/shared/SideBar/Drawer/HorizantalBar";
import { useEffect } from "react";
import { useToggleDrawerOpen } from "hooks/menu";
import { DRAWER_WIDTH } from "global/configs/config";
import { Outlet } from "react-router-dom";
import {
  DebouncedSearchBar,
  MiniSideBarDrawer,
  Navigation,
} from "components/custom";
import { useMenuItems } from "content/menuitems";
import HorizantalBar from "components/custom/HorizantalBar";
import MiniHeader from "components/custom/MiniHeader";

const DashboardLayout = () => {
  const theme = useTheme();
  const downXL = useMediaQuery(theme.breakpoints.down("xl"));
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const handlerDrawerOpen = useToggleDrawerOpen();
  const { items } = useMenuItems();

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
        <MiniHeader
          ToolBarProps={{ sx: { justifyContent: "space-between" } }}
          headerContent={<DebouncedSearchBar />}
        />
        {!isHorizontal ? (
          <MiniSideBarDrawer
            DrawerContent={<Navigation navigators={items} />}
          />
        ) : (
          <HorizantalBar children={<Navigation navigators={items} />} />
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
    </>
  );
};

export default DashboardLayout;
