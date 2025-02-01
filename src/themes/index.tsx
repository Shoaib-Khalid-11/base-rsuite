import { Provider } from "components/ui/provider";
// import { useAppStore } from "hooks";
import { ReactNode } from "react";

type ThemeCustomizationProps = {
  children: ReactNode;
};
const ThemeCustomization = ({ children }: ThemeCustomizationProps) => {
  //   const {
  //     appStateValue: { mode, rtl },
  //   } = useAppStore();
  return (
    <>
      <Provider>{children}</Provider>
    </>
  );
};

export default ThemeCustomization;
