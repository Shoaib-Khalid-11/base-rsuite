import { Toolbar, ToolbarProps } from "@mui/material";

export const AppMUIToolBar: React.FC<ToolbarProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Toolbar {...props}>{children}</Toolbar>
    </>
  );
};

export default AppMUIToolBar;
