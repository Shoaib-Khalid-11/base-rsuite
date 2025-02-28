import { TextField, TextFieldProps } from "@mui/material";

export const AppMUITextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <>
      <TextField {...props} />
    </>
  );
};

export default AppMUITextField;
