import React from "react";
import { MenuItem, MenuItemProps } from "@mui/material";

export const AppMUIMenuItem: React.FC<MenuItemProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <MenuItem {...props}>{children}</MenuItem>
    </>
  );
};

export default AppMUIMenuItem;
