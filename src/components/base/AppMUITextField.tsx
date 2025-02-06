import { TextField, TextFieldProps } from "@mui/material";

const AppMUITextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <>
      <TextField {...props} />
    </>
  );
};

export default AppMUITextField;
