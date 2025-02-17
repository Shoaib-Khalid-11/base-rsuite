import { Popper, PopoverProps } from "@mui/material";

export const AppMUIPopper: React.FC<PopoverProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Popper {...props}>{children}</Popper>
    </>
  );
};

export default AppMUIPopper;
