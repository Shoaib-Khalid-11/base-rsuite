import { Icon, IconProps } from "@iconify/react";

const AppIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <>
      <Icon {...props} />
    </>
  );
};

export default AppIcon;
