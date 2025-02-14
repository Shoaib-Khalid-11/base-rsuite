import { Grid2, Grid2Props } from "@mui/material";
import React from "react";

export const AppMUIGrid: React.FC<Grid2Props> = ({ children, ...props }) => {
  return (
    <>
      <Grid2 {...props}>{children}</Grid2>
    </>
  );
};

export default AppMUIGrid;
