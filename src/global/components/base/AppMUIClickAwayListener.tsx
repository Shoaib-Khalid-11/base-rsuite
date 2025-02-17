import { ClickAwayListener, ClickAwayListenerProps } from "@mui/material";
import React from "react";

export const AppMUIClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  children,
  ...props
}) => {
  return <ClickAwayListener {...props}>{children}</ClickAwayListener>;
};

export default AppMUIClickAwayListener;
