import { AppBar, AppBarProps } from "@mui/material";

export const AppMUIBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <>
      <AppBar {...props}>{children}</AppBar>
    </>
  );
};

export default AppMUIBar;
