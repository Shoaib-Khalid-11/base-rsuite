import { CardMedia, CardMediaProps } from "@mui/material";

export const AppMUICardMedia: React.FC<CardMediaProps> = ({ ...props }) => {
  return (
    <>
      <CardMedia {...props} />
    </>
  );
};

export default AppMUICardMedia;
