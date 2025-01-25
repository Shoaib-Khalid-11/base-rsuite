import { Form } from "rsuite";
import { Controller, FieldValues } from "react-hook-form";
import AppInputGroup from "../AppInputGroup";
import { GenericInputProps } from "types";

const AppFormInputGroup = <
  T extends FieldValues,
  D extends string | number | readonly string[] | undefined
>({
  name,
  control,
  label,
  labelProps,
  inputGroupProps,
}: GenericInputProps<T, D>): JSX.Element => {
  return (
    <div>
      {label && <Form.ControlLabel {...labelProps}>{label}</Form.ControlLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <AppInputGroup
              {...inputGroupProps}
              inputProps={{
                ...inputGroupProps?.inputProps,
                ...field,
                value: field.value,
              }}
            />
            {fieldState?.invalid && (
              <div style={{ color: "red" }}>{fieldState?.error?.message}</div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default AppFormInputGroup;
