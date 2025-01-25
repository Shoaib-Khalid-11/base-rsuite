import { Notification } from "rsuite";
import { AppNotificationProps } from "types";

export const AppNotification: React.FC<AppNotificationProps> = ({
  children,
  ...props
}) => {
  return <Notification {...props}>{children}</Notification>;
};

export default AppNotification;
