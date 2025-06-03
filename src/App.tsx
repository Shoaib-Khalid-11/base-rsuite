import { RouterProvider } from "react-router-dom";
import router from "routes";
import AppProvider_Wrapper from "providers";

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
