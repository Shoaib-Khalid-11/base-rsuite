import DashboardLayout from "layout/admin/DashboardLayout";
import Dashboard from "pages/admin";

const DashboardRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ],
};
export default DashboardRoutes;
