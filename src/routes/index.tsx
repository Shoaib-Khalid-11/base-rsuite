import { createBrowserRouter } from "react-router-dom";
import LoginRoutes from "./LoginRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Home</>,
  },
  LoginRoutes,
]);
export default router;
