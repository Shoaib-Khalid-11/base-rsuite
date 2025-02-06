import { Button, ButtonProps } from "@mui/material";

const AppMUIButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <Button {...props}>{children}</Button>
    </>
  );
};

export default AppMUIButton;
