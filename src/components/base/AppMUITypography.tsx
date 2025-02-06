import { Typography, TypographyProps } from "@mui/material";

export const AppMUITypography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Typography {...props}>{children}</Typography>
    </>
  );
};

export default AppMUITypography;
