import { sidebarMenuItems } from "global/examples/sidebarmenuItems";
import { NavItemType } from "global/types";

const menuItem: { items: NavItemType[] } = {
  items: [
    ...sidebarMenuItems,
    // {
    //   id: "single-home",
    //   title: <FormattedMessage id="home" defaultMessage="Home" />,
    //   type: "group",
    //   target: true,
    //   url: "https://www.youtube.com/",
    //   icon: "bx:home",
    // },
  ],
};

export default menuItem;
