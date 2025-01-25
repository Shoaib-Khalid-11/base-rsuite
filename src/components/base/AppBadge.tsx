import { Badge } from "rsuite";
import { AppBadgeProps } from "types";

export const AppBadge: React.FC<AppBadgeProps> = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>;
};

export default AppBadge;
