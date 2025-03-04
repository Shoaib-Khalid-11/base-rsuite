import { Tabs, TabsProps } from "@mui/material";

export const AppMUITabs: React.FC<TabsProps> = ({ children, ...Props }) => {
  return (
    <>
      <Tabs {...Props}>{children}</Tabs>
    </>
  );
};

export default AppMUITabs;
