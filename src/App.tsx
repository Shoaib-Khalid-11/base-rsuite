import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import "rsuite/dist/rsuite.min.css";
import { persistor, store } from "store";
import { RouterProvider } from "react-router-dom";
import router from "routes";
import ThemeCustomization from "themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeCustomization>
              <RouterProvider router={router} />
            </ThemeCustomization>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
