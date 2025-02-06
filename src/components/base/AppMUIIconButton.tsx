import { IconButton, IconButtonProps } from "@mui/material";

export const AppMUIIconButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <IconButton {...props}>{children}</IconButton>
    </>
  );
};

export default AppMUIIconButton;
