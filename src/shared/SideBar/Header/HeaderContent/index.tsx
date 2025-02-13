import { Theme, useMediaQuery } from "@mui/material";
import { AppMUIBox } from "components/base";
import { useAppStore } from "hooks";
import DrawerHeader from "shared/SideBar/Drawer/DrawerHeader";
import { MenuOrientation } from "types/config.model";

const HeaderContent = () => {
  const {
    appStateValue: { menuOrientation },
  } = useAppStore();
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && (
        <DrawerHeader open={true} />
      )}
      {downLG && <AppMUIBox sx={{ width: "100%", ml: 1 }} />}
    </>
  );
};

export default HeaderContent;
