import { Collapse, CollapseProps } from "@mui/material";
import React from "react";

export const AppMUICollapse: React.FC<CollapseProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Collapse {...props}>{children}</Collapse>
    </>
  );
};

export default AppMUICollapse;
