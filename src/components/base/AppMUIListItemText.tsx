import { ListItemText, ListItemTextProps } from "@mui/material";

export const AppMUIListItemText: React.FC<ListItemTextProps> = ({
  ...props
}) => {
  return (
    <>
      <ListItemText {...props} />
    </>
  );
};

export default AppMUIListItemText;
