import { ListItemAvatar, ListItemAvatarProps } from "@mui/material";

export const AppMUIListItemAvatar: React.FC<ListItemAvatarProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <ListItemAvatar {...props}>{children}</ListItemAvatar>
    </>
  );
};

export default AppMUIListItemAvatar;
