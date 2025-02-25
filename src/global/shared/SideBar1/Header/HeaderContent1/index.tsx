import { Theme, useMediaQuery } from "@mui/material";
import { AppMUIBox } from "global/components/elements/base";
import DebouncedSearchBar from "global/components/custom/DebouncedSearchBar";
import { useAppStore } from "global/hooks";
import DrawerHeader from "global/shared/SideBar/Drawer/DrawerHeader";
import { MenuOrientation } from "global/types/config.model";

const HeaderContent1 = () => {
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

export default HeaderContent1;
