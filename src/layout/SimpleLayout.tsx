import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox } from "components/base";
import { useAppStore } from "hooks";
// import NavBar from "shared/NavBar";
import Header from "shared/SideBar/Header";
import { MenuOrientation } from "types/config.model";
import Drawer from "shared/SideBar/Drawer";
import HorizontalBar from "shared/SideBar/Drawer/HorizantalBar";

const SimpleLayout = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const {
    appStateValue: { menuOrientation },
  } = useAppStore();
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

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
