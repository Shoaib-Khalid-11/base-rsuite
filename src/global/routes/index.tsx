import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import SimpleLayout from "layout/SimpleLayout";
import DashboardRoutes from "./AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
  },
  LoginRoutes,
  DashboardRoutes,
]);
export default router;
