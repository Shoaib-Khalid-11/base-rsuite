import { Divider, DividerProps } from "@mui/material";

export const AppMUIDivider: React.FC<DividerProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Divider {...props}>{children}</Divider>
    </>
  );
};

export default AppMUIDivider;
