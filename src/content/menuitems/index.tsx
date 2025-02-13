import { NavItemType } from "types/menu.model";
import { FormattedMessage } from "react-intl";

const menuItem: { items: NavItemType[] } = {
  items: [
    {
      id: "single-home",
      title: <FormattedMessage id="home" />,
      type: "group",
      target: true,
      url: "https://www.youtube.com/",
      icon: "bx:home",
    },
  ],
};

export default menuItem;
