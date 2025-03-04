import { Tab, TabProps } from "@mui/material";

export const AppMUITab: React.FC<TabProps> = ({ ...props }) => {
  return (
    <>
      <Tab {...props} />
    </>
  );
};

export default AppMUITab;
