import { Stack, StackProps } from "@mui/material";
import React from "react";

export const AppMUIStack: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <>
      <Stack {...props}>{children}</Stack>
    </>
  );
};

export default AppMUIStack;
