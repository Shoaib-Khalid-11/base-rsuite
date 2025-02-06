import React from "react";
import { Menu, MenuProps } from "@mui/material";

export const AppMUIMenu: React.FC<MenuProps> = ({ children, ...props }) => {
  return (
    <>
      <Menu {...props}>{children}</Menu>
    </>
  );
};

export default AppMUIMenu;
