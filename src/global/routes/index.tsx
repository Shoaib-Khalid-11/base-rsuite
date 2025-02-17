import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import SimpleLayout from "layout/SimpleLayout";
import DashboardRoutes from "./AdminLayout";
import Dashboard1Routes from "./AdminLayout1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
  },
  LoginRoutes,
  DashboardRoutes,
  Dashboard1Routes,
]);
export default router;
