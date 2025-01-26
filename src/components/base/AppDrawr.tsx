import { Drawer } from "rsuite";
import { AppDrawerProps } from "types";

export const AppDrawer: React.FC<AppDrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>;
};

export default AppDrawer;
export const AppDrawerBody = Drawer.Body;
export const AppDrawerHeader = Drawer.Header;
export const AppDrawerTitle = Drawer.Title;
export const AppDrawerFooter = Drawer.Footer;
export const AppDrawerClose = Drawer.Actions;
