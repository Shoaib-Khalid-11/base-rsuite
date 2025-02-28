import { CSSObject, Drawer, styled, Theme } from "@mui/material";
import { DRAWER_WIDTH } from "global/configs/config";
import { ThemeMode } from "global/types";

const openedMixin = (theme: Theme) =>
  ({
    backgroundColor: theme.palette.background.default,
    width: DRAWER_WIDTH,
    borderRight: `1px dashed ${
      theme.palette.mode === ThemeMode.DARK
        ? theme.palette.secondary.light
        : theme.palette.secondary.dark
    }`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    boxShadow:
      theme.palette.mode === ThemeMode.DARK ? theme.shadows[8] : "none",
  } as CSSObject);
const closedMixin = (theme: Theme) =>
  ({
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 0,
    borderRight: "none",
    boxShadow: theme.shadows[8],
  } as CSSObject);
export const DrawerStyled1 = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
export default DrawerStyled1;
