import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import SimpleLayout from "layout/SimpleLayout";
import DashboardRoutes from "./AdminRoutes";
import Dashboard1Routes from "./AdminRoutes1";
import YoutubeRoutes from "./YoutubeRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
  },
  LoginRoutes,
  DashboardRoutes,
  Dashboard1Routes,
  YoutubeRoutes,
]);
export default router;
