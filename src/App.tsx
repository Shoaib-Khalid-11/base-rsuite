import { RouterProvider } from "react-router-dom";
import AppProvider_Wrapper from "providers";
import router from "routes";

function App() {
  return (
    <>
      <AppProvider_Wrapper>
        <RouterProvider router={router} />
      </AppProvider_Wrapper>
    </>
  );
}

export default App;
