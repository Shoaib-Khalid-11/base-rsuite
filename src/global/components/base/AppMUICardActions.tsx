import { CardActions, CardActionsProps } from "@mui/material";

export const AppMUICardActions: React.FC<CardActionsProps> = ({
  children,
  ...props
}) => {
  return <CardActions {...props}>{children}</CardActions>;
};

export default AppMUICardActions;
