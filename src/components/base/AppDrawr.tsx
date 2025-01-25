import { Drawer } from "rsuite";
import { AppDrawerProps } from "types";

export const AppDrawer: React.FC<AppDrawerProps> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>;
};

export default AppDrawer;
