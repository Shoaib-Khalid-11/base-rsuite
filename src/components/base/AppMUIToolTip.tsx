import { Tooltip, TooltipProps } from "@mui/material";
export const AppMUIToolTip: React.FC<TooltipProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Tooltip {...props}>{children}</Tooltip>
    </>
  );
};

export default AppMUIToolTip;
