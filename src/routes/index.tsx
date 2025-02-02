import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import LandingPage from "layout/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  LoginRoutes,
]);
export default router;
