import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Locales from "components/custom/locales";
import ScrollTop from "components/custom/ScrollTop";
import NotiStackProvider from "components/third-party/NotiStackProvider";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "store";
import CustomThemeProvider from "theme";
interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider_Wrapper: React.FC<AppProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <CustomThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Locales>
                <ScrollTop>
                  <NotiStackProvider>{children}</NotiStackProvider>
                </ScrollTop>
              </Locales>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </CustomThemeProvider>
    </>
  );
};

export default AppProvider_Wrapper;
