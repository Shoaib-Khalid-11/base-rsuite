import { useMediaQuery, useTheme } from "@mui/material";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import { useMemo } from "react";
import DrawerContent from "./Drawer/Content";
import { AppMUIBox, AppMUIDrawer } from "components/base";
import MiniDrawerStyled from "./MiniDrawerStyled";
import { DRAWER_WIDTH } from "configs/config";
interface Props {
  window?: () => Window;
}
export const MainSideBar: React.FC<Props> = ({ window }) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const handlerDrawerOpen = useToggleDrawerOpen();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawerContent = useMemo(() => <DrawerContent />, []);
  return (
    <>
      <AppMUIBox
        component="nav"
        sx={{ flexShrink: { md: 0 }, zIndex: 1200 }}
        aria-label="mailbox folders"
      >
        {!downLG ? (
          <MiniDrawerStyled variant="permanent" open={drawerOpen}>
            {/* {drawerHeader} */}
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
            {/* {drawerHeader} */}
            {drawerContent}
          </AppMUIDrawer>
        )}
      </AppMUIBox>
    </>
  );
};

export default MainSideBar;
