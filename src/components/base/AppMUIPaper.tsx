import { Paper, PaperProps } from "@mui/material";

export const AppMUIPaper: React.FC<PaperProps> = ({ children, ...props }) => {
  return (
    <>
      <Paper {...props}>{children}</Paper>
    </>
  );
};

export default AppMUIPaper;
