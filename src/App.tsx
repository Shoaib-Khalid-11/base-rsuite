import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";
import { RouterProvider } from "react-router-dom";
import router from "routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomThemeProvider from "theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <CustomThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </CustomThemeProvider>
    </>
  );
}

export default App;
