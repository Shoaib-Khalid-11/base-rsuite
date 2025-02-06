import { Button, ButtonProps } from "@mui/material";

export const AppMUIButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <Button {...props}>{children}</Button>
    </>
  );
};

export default AppMUIButton;
