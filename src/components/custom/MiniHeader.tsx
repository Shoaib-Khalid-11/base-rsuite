import {
  alpha,
  AppBarProps,
  ToolbarProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppStore } from "hooks";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import { MenuOrientation } from "types";
import { ReactNode, useMemo } from "react";
import {
  AppIcon,
  AppMUIAppBar,
  AppMUIIconButton,
  AppMUIToolBar,
} from "components/elements/base";
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from "configs/config";
import AppBarStyled from "components/elements/AppBarStyled";
import ChildrenNode from "../elements/ChildrenNode";
// import AppBarStyled from "./AppBarStyled";
interface MiniHeaderProps {
  headerContent?: ReactNode; // Custom content for the header
  ToolBarProps?: ToolbarProps;
}
export const MiniHeader: React.FC<MiniHeaderProps> = ({
  headerContent,
  ToolBarProps,
}) => {
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
  const headerContentMemo: ReactNode | undefined = useMemo(
    () => <ChildrenNode children={headerContent} />,
    [headerContent]
  );
  // const iconBackColorOpen =
  //   mode === ThemeMode.DARK ? "background.paper" : "secondary.light";
  // const iconBackColor =
  //   mode === ThemeMode.DARK ? "background.default" : "secondary.light";
  const mainHeader: ReactNode = (
    <AppMUIToolBar sx={{ px: { xs: 2, sm: 4.5, lg: 8 } }} {...ToolBarProps}>
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
      {headerContentMemo}
    </AppMUIToolBar>
  );
  const appBar: AppBarProps = {
    position: "fixed",
    elevation: 0,
    sx: {
      bgcolor: alpha(theme.palette.background.default, 0.8),
      backdropFilter: "blur(8px)",
      zIndex: 1200,
      width: isHorizontal
        ? "100%"
        : {
            xs: "100%",
            lg: drawerOpen
              ? `calc(100% - ${DRAWER_WIDTH}px)`
              : `calc(100% - ${MINI_DRAWER_WIDTH}px)`,
          },
    },
  };
  return (
    <>
      {!downLG ? (
        <AppBarStyled open={drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppMUIAppBar {...appBar}>{mainHeader}</AppMUIAppBar>
      )}
    </>
  );
};

export default MiniHeader;
