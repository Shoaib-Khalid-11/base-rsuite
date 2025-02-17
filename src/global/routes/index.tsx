import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import SimpleLayout from "layout/SimpleLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
    children: [
      {
        path: "/dashboard",
        element: <>Home</>,
      },
    ],
  },
  LoginRoutes,
]);
export default router;
