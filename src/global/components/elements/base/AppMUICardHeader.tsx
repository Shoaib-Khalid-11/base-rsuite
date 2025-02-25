import { CardHeader, CardHeaderProps } from "@mui/material";

export const AppMUICardHeader: React.FC<CardHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <CardHeader {...props}>{children}</CardHeader>
    </>
  );
};

export default AppMUICardHeader;
