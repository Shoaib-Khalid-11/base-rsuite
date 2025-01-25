import { AuthLayout } from "layout/Auth";

const LoginRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <>Login Page</>,
    },
  ],
};
export default LoginRoutes;
