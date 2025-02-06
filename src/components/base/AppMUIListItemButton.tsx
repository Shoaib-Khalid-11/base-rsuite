import { ListItemButton, ListItemButtonProps } from "@mui/material";

export const AppMUIListItemButton: React.FC<ListItemButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <ListItemButton {...props}>{children}</ListItemButton>
    </>
  );
};

export default AppMUIListItemButton;
