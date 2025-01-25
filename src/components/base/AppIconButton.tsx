import { IconButton, IconButtonProps } from "rsuite";
// import { Icon, IconifyIconProps } from "@iconify-icon/react";

export interface AppIconButtonProps extends IconButtonProps {
  //   iconProps?: IconifyIconProps; // Optional icon props
  children?: React.ReactNode; // Optional children
}

const AppIconButton: React.FC<AppIconButtonProps> = ({
  children,
  //   iconProps,
  ...props
}) => {
  return (
    <IconButton
      {...props}
      //   icon={<Icon {...iconProps} icon={iconProps?.icon ?? ""} />}
    >
      {children}
    </IconButton>
  );
};

export default AppIconButton;
