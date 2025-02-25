import { Masonry, MasonryProps } from "@mui/lab";
import React from "react";

export const AppMUIMasonry: React.FC<MasonryProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Masonry {...props}>{children}</Masonry>
    </>
  );
};

export default AppMUIMasonry;
