import { useAppStore } from "hooks";
import { ReactNode } from "react";
import { CustomProvider } from "rsuite";

type ThemeCustomizationProps = {
  children: ReactNode;
};
const ThemeCustomization = ({ children }: ThemeCustomizationProps) => {
  const {
    appStateValue: { mode, rtl },
  } = useAppStore();
  return (
    <>
      <CustomProvider theme={mode} rtl={rtl}>
        {children}
      </CustomProvider>
    </>
  );
};

export default ThemeCustomization;
