import React from "react";
import { Button, ButtonProps } from "rsuite";
export interface AppButtonProps extends ButtonProps {
  children: React.ReactNode;
}
// Make the component accept ButtonProps from rsuite to allow customization
export const AppButton: React.FC<AppButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default AppButton;
