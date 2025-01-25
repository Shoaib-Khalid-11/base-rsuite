import { Input } from "rsuite";
import { AppInputProps } from "types";

const AppInput = <T extends string | number | readonly string[] | undefined>({
  value,
  ...inputProps
}: AppInputProps<T>) => {
  return <Input {...inputProps} value={value} />;
};

export default AppInput;
