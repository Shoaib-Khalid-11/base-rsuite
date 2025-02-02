import { useMediaQuery, useTheme } from "@mui/material";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import React from "react";

const Header = () => {
  const handelDrawr = useToggleDrawerOpen();
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  return <div></div>;
};

export default Header;
