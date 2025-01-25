import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";
import LandingPage from "layout/Landing/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  LoginRoutes,
]);
export default router;
