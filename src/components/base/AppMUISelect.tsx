import { Select, SelectProps } from "@mui/material";

export const AppMUISelect: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <>
      <Select {...props}>{children}</Select>
    </>
  );
};

export default AppMUISelect;
