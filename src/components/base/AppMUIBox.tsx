import { Box, BoxProps } from "@mui/material";
import React from "react";

export const AppMUIBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <>
      <Box {...props}>{children}</Box>
    </>
  );
};

export default AppMUIBox;
