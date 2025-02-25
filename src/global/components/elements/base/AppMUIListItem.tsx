import { ListItem, ListItemProps } from "@mui/material";

export const AppMUIListItem: React.FC<ListItemProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <ListItem {...props}>{children}</ListItem>
    </>
  );
};

export default AppMUIListItem;
