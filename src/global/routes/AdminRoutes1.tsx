import DashboardLayout1 from "layout/admin1/DashboardLayout1";
import Dashboard from "pages/admin";

const Dashboard1Routes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <DashboardLayout1 />,
      children: [
        {
          path: "/dashboard1",
          element: <Dashboard />,
        },
      ],
    },
  ],
};
export default Dashboard1Routes;
