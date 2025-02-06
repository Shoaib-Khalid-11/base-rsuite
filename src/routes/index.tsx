import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import SimpleLayout from "layout/SimpleLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
  },
  LoginRoutes,
]);
export default router;
