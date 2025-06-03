import { InputBase, InputBaseProps } from "@mui/material";
import React from "react";

export const AppMUIInputBase: React.FC<InputBaseProps> = ({ ...props }) => {
  return (
    <>
      <InputBase {...props} />
    </>
  );
};

export default AppMUIInputBase;
