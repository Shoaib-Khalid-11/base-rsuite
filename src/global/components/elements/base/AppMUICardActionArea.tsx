import { CardActionArea, CardActionAreaProps } from "@mui/material";
import React from "react";

export const AppMUICardActionArea: React.FC<CardActionAreaProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <CardActionArea {...props}>{children}</CardActionArea>
    </>
  );
};

export default AppMUICardActionArea;
