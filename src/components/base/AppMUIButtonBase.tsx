import { ButtonBase, ButtonBaseProps } from "@mui/material";

export const AppMUIButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <ButtonBase {...props}>{children}</ButtonBase>
    </>
  );
};

export default AppMUIButtonBase;
