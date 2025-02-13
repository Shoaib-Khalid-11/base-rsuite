import { useMediaQuery, useTheme } from "@mui/material";
import { useAppStore } from "hooks";
import { MenuOrientation } from "types/config.model";
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import { DRAWER_WIDTH, HEADER_HEIGHT } from "configs/config";
import LogoSection from "shared/icon";

interface Props {
  open: boolean;
}
export const DrawerHeader: React.FC<Props> = ({ open }) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const {
    appStateValue: { menuOrientation },
  } = useAppStore();
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  return (
    <>
      <DrawerHeaderStyled
        // theme={theme}
        open={open}
        sx={{
          minHeight: isHorizontal ? "unset" : HEADER_HEIGHT,
          width: isHorizontal
            ? { xs: "100%", lg: DRAWER_WIDTH + 50 }
            : "fit-content",
          paddingTop: isHorizontal ? { xs: "10px", lg: "0" } : "8px",
          paddingBottom: isHorizontal ? { xs: "18px", lg: "0" } : "8px",
          paddingLeft: isHorizontal
            ? { xs: "24px", lg: "0" }
            : open
            ? "24px"
            : 0,
        }}
      >
        <LogoSection
          isIcon={!open}
          sx={{
            width: open ? "94%" : "auto",
            height: "auto",
            // fontSize: open ? "94%" : "auto",
          }}
        />
      </DrawerHeaderStyled>
    </>
  );
};

export default DrawerHeader;
