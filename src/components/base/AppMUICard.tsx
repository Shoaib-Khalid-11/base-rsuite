import { Card, CardProps } from "@mui/material";

export const AppMUICard: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <>
      <Card {...props}>{children}</Card>
    </>
  );
};

export default AppMUICard;
