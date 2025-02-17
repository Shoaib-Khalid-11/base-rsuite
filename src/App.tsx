import { RouterProvider } from "react-router-dom";
import router from "global/routes";
import AppProvider_Wrapper from "global/providers";

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
