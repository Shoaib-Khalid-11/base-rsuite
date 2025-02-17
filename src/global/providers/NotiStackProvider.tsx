import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

const NotiStackProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SnackbarProvider>{children}</SnackbarProvider>
    </>
  );
};

export default NotiStackProvider;
