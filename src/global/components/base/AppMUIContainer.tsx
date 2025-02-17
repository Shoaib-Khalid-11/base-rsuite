import { Container, ContainerProps } from "@mui/material";

export const AppMUIContainer: React.FC<ContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Container {...props}>{children}</Container>
    </>
  );
};

export default AppMUIContainer;
