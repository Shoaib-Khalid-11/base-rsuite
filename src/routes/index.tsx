import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import SimpleLayout from "layout/SimpleLayout";
import DashboardRoutes from "./AdminRoutes";
import YoutubeRoutes from "./YoutubeRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleLayout />,
  },
  LoginRoutes,
  DashboardRoutes,
  YoutubeRoutes,
]);
export default router;
