import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox, AppMUIDrawer } from "components/elements/base";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import { DRAWER_WIDTH } from "configs/config";
import { useMemo } from "react";
import SideBarContent from "./SideBarContent";
import DrawerHeader from "./DrawerHeader";
import { DrawerStyled } from "stylus";
interface Props {
  window?: () => Window;
  DrawerContent?: React.ReactNode;
}
export const SideBarDrawer: React.FC<Props> = ({ window, DrawerContent }) => {
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
          <DrawerStyled variant="permanent" open={drawerOpen}>
            {drawerHeader}
            {drawerContent}
          </DrawerStyled>
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

export default SideBarDrawer;
