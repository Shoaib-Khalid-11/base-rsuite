import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import "rsuite/dist/rsuite.min.css";
import { persistor, store } from "store";
import { RouterProvider } from "react-router-dom";
import router from "routes";
// import ThemeCustomization from "themes";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ThemeCustomization> */}
          <RouterProvider router={router} />
          {/* </ThemeCustomization> */}
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
