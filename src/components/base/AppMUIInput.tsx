import { Input, InputProps } from "@mui/material";
import React from "react";

export const AppMUIInput: React.FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <Input {...props} />
    </>
  );
};

export default AppMUIInput;
