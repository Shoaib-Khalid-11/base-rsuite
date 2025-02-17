import { NavItemType } from "global/types/menu.model";
import { FormattedMessage } from "react-intl";

export const sidebarMenuItems: NavItemType[] = [
  {
    id: "single-home",
    title: <FormattedMessage id="home" defaultMessage="Home" />,
    type: "group",
    url: "/",
    icon: "bx:home",
  },
  {
    id: "dashboard",
    title: <FormattedMessage id="dashboard" defaultMessage="Dashboard" />,
    type: "group",
    url: "/dashboard",
    icon: "bx:bar-chart-alt",
  },
];
