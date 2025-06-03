import { useMediaQuery, useTheme } from "@mui/material";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import { useMemo } from "react";
import { AppMUIBox, AppMUIDrawer } from "components/elements/base";
import { DRAWER_WIDTH } from "global/configs/config";
import DrawerHeader from "./DrawerHeader";
import { MiniDrawerStyled } from "stylus";
import SideBarContent from "./SideBarContent";
interface Props {
  window?: () => Window;
  DrawerContent?: React.ReactNode;
}
export const MiniSideBarDrawer: React.FC<Props> = ({
  window,
  DrawerContent,
}) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const handlerDrawerOpen = useToggleDrawerOpen();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawerContent = useMemo(
    () => <SideBarContent children={DrawerContent} />,
    [DrawerContent]
  );
  const drawerHeader = useMemo(
    () => <DrawerHeader open={drawerOpen} />,
    [drawerOpen]
  );

  return (
    <>
      <AppMUIBox
        component="nav"
        sx={{ flexShrink: { md: 0 }, zIndex: 1200 }}
        aria-label="mailbox folders"
      >
        {!downLG ? (
          <MiniDrawerStyled variant="permanent" open={drawerOpen}>
            {drawerHeader}
            {drawerContent}
          </MiniDrawerStyled>
        ) : (
          <AppMUIDrawer
            container={container}
            variant="temporary"
            open={drawerOpen}
            onClose={() => handlerDrawerOpen.mutate(!drawerOpen)}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
                borderRight: `1px solid ${theme.palette.divider}`,
                backgroundImage: "none",
                boxShadow: "inherit",
              },
            }}
          >
            {drawerHeader}
            {drawerContent}
          </AppMUIDrawer>
        )}
      </AppMUIBox>
    </>
  );
};

export default MiniSideBarDrawer;
