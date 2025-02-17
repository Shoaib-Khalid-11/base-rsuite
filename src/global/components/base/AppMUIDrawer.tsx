import { Drawer, DrawerProps } from "@mui/material";

export const AppMUIDrawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  return (
    <>
      <Drawer {...props}>{children}</Drawer>
    </>
  );
};

export default AppMUIDrawer;
