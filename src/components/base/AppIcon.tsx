import React from "react";
import { Icon } from "@iconify-icon/react";
import { AppIconProps } from "types";

export const AppIcon: React.FC<AppIconProps> = ({
  icon,
  size = 24,
  color = "inherit",
  ...rest
}) => {
  return (
    <Icon
      icon={icon}
      color={color}
      style={{ fontSize: size, color }}
      {...rest}
    />
  );
};

export default AppIcon;
