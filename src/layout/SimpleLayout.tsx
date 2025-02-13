import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox } from "components/base";
import { useAppStore } from "hooks";
// import NavBar from "shared/NavBar";
import Header from "shared/SideBar/Header";
import { MenuOrientation } from "types/config.model";
import Drawer from "shared/SideBar/Drawer";
import HorizontalBar from "shared/SideBar/Drawer/HorizantalBar";
import { useEffect } from "react";
import { useToggleDrawerOpen } from "hooks/menu";

const SimpleLayout = () => {
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
        {/* <NavBar /> */}
        <Header />
        {!isHorizontal ? <Drawer /> : <HorizontalBar />}
      </AppMUIBox>
    </>
  );
};

export default SimpleLayout;
