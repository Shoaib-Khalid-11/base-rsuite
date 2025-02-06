import { IconButton, IconButtonProps } from "@mui/material";

const AppMUIIconButton: React.FC<IconButtonProps> = ({
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
