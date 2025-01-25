import { Message, MessageProps } from "rsuite";
export interface AppAlertMessageProps extends MessageProps {
  children: React.ReactNode;
}
export const AppAlertMessage: React.FC<AppAlertMessageProps> = ({
  children,
  ...props
}) => {
  return <Message {...props}>{children}</Message>;
};

export default AppAlertMessage;
