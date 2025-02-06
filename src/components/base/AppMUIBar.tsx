import { AppBar, AppBarProps } from "@mui/material";

const AppMUIBar: React.FC<AppBarProps> = ({ children, ...props }) => {
  return (
    <>
      <AppBar {...props}>{children}</AppBar>
    </>
  );
};

export default AppMUIBar;
