import { Fade, FadeProps } from "@mui/material";
import React from "react";

export const AppMUIFade: React.FC<FadeProps> = ({ children, ...props }) => {
  return (
    <>
      <Fade {...props}>{children}</Fade>
    </>
  );
};

export default AppMUIFade;
