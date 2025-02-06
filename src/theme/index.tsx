import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ReactNode } from "react";
type ThemeCustomizationProps = {
  children: ReactNode;
};
const CustomThemeProvider: React.FC<ThemeCustomizationProps> = ({
  children,
}) => {
  const defaultTheme = createTheme(); // Default MUI theme

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default CustomThemeProvider;
