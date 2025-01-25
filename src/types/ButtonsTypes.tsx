import { Icon } from "@iconify-icon/react";
import { IconButtonProps } from "rsuite";

export interface AppIconProps
  extends Omit<React.ComponentProps<typeof Icon>, "ref"> {
  size?: number; // Explicitly set size to `number` as required by Iconify
  color?: string; // Allow customization for color
}
export interface AppIconButtonProps extends Omit<IconButtonProps, "icon"> {
  iconProps: AppIconProps;
  children?: React.ReactNode; // Optional children for additional content
}
