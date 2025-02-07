import { Chip, ChipProps } from "@mui/material";

export const AppMUIChip: React.FC<ChipProps> = ({ ...props }) => {
  return (
    <>
      <Chip {...props} />
    </>
  );
};

export default AppMUIChip;
