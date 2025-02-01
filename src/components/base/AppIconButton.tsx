import { IconButton, IconButtonProps } from "@chakra-ui/react";
import AppIcon from "./AppIcon";
import { AppIconProps } from "types";
export interface AppIconButtonProps extends IconButtonProps {
  AppIconProps: AppIconProps;
}
export const AppIconButton: React.FC<AppIconButtonProps> = ({
  AppIconProps,
  ...props
}) => {
  return (
    <IconButton {...props}>
      <AppIcon {...AppIconProps} />
    </IconButton>
  );
};

export default AppIconButton;
