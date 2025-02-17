// import { AuthLayout } f  rom "layout/Auth";

const LoginRoutes = {
  path: "/",
  element: <>Login Layout</>,
  children: [
    {
      path: "login",
      element: <>Login Page</>,
    },
  ],
};
export default LoginRoutes;
