import { Theme, useMediaQuery } from "@mui/material";
import { AppMUIBox } from "components/base";
import DebouncedSearchBar from "components/custom/DebouncedSearchBar";
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
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && (
        <DrawerHeader open={true} />
      )}
      <AppMUIBox sx={{ width: "100%", ml: 1 }} />
      {/* {downLG && <AppMUIBox sx={{ width: "100%", ml: 1 }} />} */}
      <DebouncedSearchBar />
    </>
  );
};

export default HeaderContent;
