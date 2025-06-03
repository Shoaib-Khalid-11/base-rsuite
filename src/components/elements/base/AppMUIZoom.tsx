import { Zoom, ZoomProps } from "@mui/material";

export const AppMUIZoom: React.FC<ZoomProps> = ({ children, ...props }) => {
  return (
    <>
      <Zoom {...props}>{children}</Zoom>
    </>
  );
};

export default AppMUIZoom;
