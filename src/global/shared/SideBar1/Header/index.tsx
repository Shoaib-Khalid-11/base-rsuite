import { alpha, AppBarProps, useMediaQuery, useTheme } from "@mui/material";
import {
  AppIcon,
  AppMUIAppBar,
  AppMUIIconButton,
  AppMUIToolBar,
} from "global/components/elements/base";
import AppBarStyled1 from "global/components/elements/AppBarStyled1";
import { DRAWER_WIDTH } from "global/configs/config";
import { useAppStore } from "global/hooks";
import { useGetMenuMaster, useToggleDrawerOpen } from "global/hooks";
import { MenuOrientation } from "global/types";
import { ReactNode, useMemo } from "react";
import HeaderContent1 from "./HeaderContent1";
// import { useMemo } from "react";

const Header1 = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const {
    appStateValue: { /*mode*/ menuOrientation },
  } = useAppStore();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const handlerDrawerOpen = useToggleDrawerOpen();
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  // header content
  const headerContent = useMemo(() => <HeaderContent1 />, []);
  const mainHeader: ReactNode = (
    <AppMUIToolBar sx={{ px: { xs: 2, sm: 4.5, lg: 8 } }}>
      {!isHorizontal ? (
        <AppMUIIconButton
          aria-label="open drawer"
          onClick={() => handlerDrawerOpen.mutate(!drawerOpen)}
          edge="start"
          color="secondary"
          // variant="light"
          size="large"
          sx={{
            color: "secondary.main",
            // bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor,
            ml: { xs: 0, lg: -2 },
            p: 1,
          }}
        >
          {drawerOpen ? (
            <AppIcon icon="line-md:menu-unfold-left" />
          ) : (
            <AppIcon icon="line-md:menu-fold-right" />
          )}
        </AppMUIIconButton>
      ) : null}
      {headerContent}
    </AppMUIToolBar>
  );
  const appBar: AppBarProps = {
    position: "fixed",
    // elevation: 0,
    sx: {
      bgcolor: alpha(theme.palette.background.default, 0.8),
      backdropFilter: "blur(8px)",
      zIndex: 1200,
      width: isHorizontal
        ? "100%"
        : {
            xs: "100%",
            lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : `100%`,
          },
    },
  };
  return (
    <>
      {!downLG ? (
        <AppBarStyled1 open={drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled1>
      ) : (
        <AppMUIAppBar {...appBar}>{mainHeader}</AppMUIAppBar>
      )}
    </>
  );
};

export default Header1;
