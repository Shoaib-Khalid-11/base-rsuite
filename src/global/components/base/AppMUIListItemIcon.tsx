import { ListItemIcon, ListItemIconProps } from "@mui/material";

export const AppMUIListItemIcon: React.FC<ListItemIconProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <ListItemIcon {...props}>{children}</ListItemIcon>
    </>
  );
};

export default AppMUIListItemIcon;
