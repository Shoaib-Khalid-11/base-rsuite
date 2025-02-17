import { CardContent, CardContentProps } from "@mui/material";

export const AppMUICardContent: React.FC<CardContentProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <CardContent {...props}>{children}</CardContent>
    </>
  );
};

export default AppMUICardContent;
