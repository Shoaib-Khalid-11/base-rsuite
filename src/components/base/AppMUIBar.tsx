import { AppBar, AppBarProps } from "@mui/material";

export const AppMUIAppBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <>
      <AppBar {...props}>{children}</AppBar>
    </>
  );
};

export default AppMUIAppBar;
