import { List, ListProps } from "@mui/material";

export const AppMUIList: React.FC<ListProps> = ({ children, ...props }) => {
  return (
    <>
      <List {...props}>{children}</List>
    </>
  );
};

export default AppMUIList;
