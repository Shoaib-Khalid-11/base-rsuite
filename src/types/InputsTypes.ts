import { InputGroupProps, InputProps } from "rsuite";

export interface AppInputGroupProps<
  T extends string | number | readonly string[] | undefined
> extends InputGroupProps {
  inputProps: AppInputProps<T>;
  prefixData?: React.ReactNode | string | number;
  surfexData?: React.ReactNode | string | number;
  prefixButton?: React.ReactNode | string | number;
  surfexButton?: React.ReactNode | string | number;
  prefixButtonOnClick?: () => void;
  surfexButtonOnClick?: () => void;
}
export interface AppInputProps<
  T extends string | number | readonly string[] | undefined
> extends InputProps {
  value?: T;
}
