import { Avatar, AvatarProps } from "@mui/material";

export const AppMUIAvatar: React.FC<AvatarProps> = ({ children, ...props }) => {
  return (
    <>
      <Avatar {...props}>{children}</Avatar>
    </>
  );
};

export default AppMUIAvatar;
