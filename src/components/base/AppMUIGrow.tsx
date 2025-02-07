import { Grow, GrowProps } from "@mui/material";
import React from "react";

export const AppMUIGrow: React.FC<GrowProps> = ({ children, ...props }) => {
  return (
    <>
      <Grow {...props}>{children}</Grow>
    </>
  );
};

export default AppMUIGrow;
