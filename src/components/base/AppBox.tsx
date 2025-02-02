import { Box, BoxProps } from "@mui/material";

export const AppBox = ({ children, ...props }: BoxProps) => {
  return <Box {...props}>{children}</Box>;
};

export default AppBox;
