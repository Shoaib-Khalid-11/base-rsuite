import { ButtonGroup } from "rsuite";
import { AppButtonGroupProps } from "types";

export const AppButtonGroup: React.FC<AppButtonGroupProps> = ({
  children,
  ...props
}) => {
  return <ButtonGroup {...props}>{children}</ButtonGroup>;
};

export default AppButtonGroup;
